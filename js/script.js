'use-strict';

const templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
  tagCloudList: Handlebars.compile(document.querySelector('#template-tag-cloud-list').innerHTML),
  authorsList: Handlebars.compile(document.querySelector('#template-authors-list').innerHTML)
};

{
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }


    /* [DONE] add class 'active' to clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .post.active');
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from clicked link */
    const atribute = clickedElement.getAttribute('href');

    /* [DONE] find correct article using selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(atribute);

    /* [DONE] add class 'active' to the correct artcle */
    targetArticle.classList.add('active');
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTtileListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author',
    optTagListSelector = '.tags.list',
    optCloudClassCount = '3',
    optCloudClassPrefix = 'tag-size-',
    optAuthorsListSelector = '.authors.list';

  function generateTitleLinks(customSelector = ''){

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTtileListSelector);
    titleList.innerHTML = '';

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    let html = '';
    for(let article of articles){

      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');

      /* [DONE] find the list element */
      /* [DONE] get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* [DONE] create HTML of the link */
      //const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      const linkHTMLData = {id: articleId, title: articleTitle};
      const linkHTML = templates.articleLink(linkHTMLData);

      /* [DONE] insert link into titleList */
      html = html + linkHTML;
    }
    titleList.innerHTML = html;

  }

  generateTitleLinks();
  linkClick();

  function linkClick(){
  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  }
  function calculateTagClass(count, params){

    const normalizedCount = count - params.min;
    const normalizedmax = params.max - params.min;
    const percentage = normalizedCount / normalizedmax;
    const classNumber = Math.floor(percentage * (optCloudClassCount - 1) +1 );

    return classNumber;

  }

  function generateTags(){
    // add object variable
    let allTags = {};

    /* [DONE] find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
  
    /* [DONE] START LOOP: for every article: */
    for(let article of articles){
  
      /* [DONE] find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
  
      /* [DONE] make html variable with empty string */
      let html = '';
  
      /* [DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* [DONE] split tags into array */
      const articleTagsArray = articleTags.split(' ');
  
      /* [DONE] START LOOP: for each tag */
      for (let tag of articleTagsArray){

        /* [DONE] generate HTML of the link */
        const linkHTMLData = {id: 'tag-' + tag, title: tag};
        const linkHTML = templates.articleLink(linkHTMLData);
  
        /* [DONE] add generated code to html variable */
        html = html + linkHTML + ' ';

        // check if link is NOT in allTags already
        if(!allTags.hasOwnProperty(tag)){
          // add link (generated code) to allTags object
          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }

      /* [DONE] END LOOP: for each tag */
      }

      /* [DONE] insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
  
    /* [DONE] END LOOP: for every article: */
    }

    // Find list of tags in right column
    const tagList = document.querySelector(optTagListSelector);

    const tagsParams = calculateTagsParams(allTags);

    // Create variable for all links HTML code
    const allTagsData = {tags: []};

    //Start Loop: for each tag in allTags
    for(let tag in allTags){
      // Generate code of a link and add it to allTagsHTML
      const tagLinkHTML = calculateTagClass(allTags[tag], tagsParams);
      const classLinkHTML = optCloudClassPrefix + tagLinkHTML;
      allTagsData.tags.push({
        tag: tag,
        count: allTags[tag],
        className: calculateTagClass(allTags[tag], tagsParams)
      });
    }

    //add html from allTagsHTML to tagList
    tagList.innerHTML = templates.tagCloudList(allTagsData);
  }
  
  function calculateTagsParams(tags){
    const params = {max: 0, min: 999};

    for(let tag in tags){
      if(tags[tag] > params.max){
        params.max = tags[tag];
      }
      if(tags[tag] < params.min){
        params.min = tags[tag];
      }
    }

    return params;
  }

  generateTags();

  function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  
    /* START LOOP: for each active tag link */
    for(let activeTag of tagLinks){
  
      /* remove class active */
      activeTag.classList.remove('active');

    /* END LOOP: for each active tag link */
    }
  
    /* find all tag links with "href" attribute equal to the "href" constant */
    const hrefTagLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */
    for(let hrefTagLink of hrefTagLinks){
  
      /* add class active */
      hrefTagLink.classList.add('active');
  
    /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
    linkClick();
  }

  function addClickListenersToTags(){
    /* find all links to tags */
    const allLinks = document.querySelectorAll('a[href^="#tag-"]');
  
    /* START LOOP: for each link */
    for(let eachLink of allLinks){
  
      /* add tagClickHandler as event listener for that link */
      eachLink.addEventListener('click', tagClickHandler); 
    /* END LOOP: for each link */
    }
  }
  
  addClickListenersToTags();

  function generateAuthors(){

    let allAuthors = {};

    const articles = document.querySelectorAll(optArticleSelector);

    for(let article of articles){

      const authorWrapper = article.querySelector(optArticleAuthorSelector);

      let html = '';

      const articleAuthor = article.getAttribute('data-author');

      const linkHTMLData = {id: 'author-' + articleAuthor, title: articleAuthor};
      const linkHTML = templates.articleLink(linkHTMLData);

      html = html + linkHTML;

      if(!allAuthors.hasOwnProperty(articleAuthor)){
        allAuthors[articleAuthor] = 1;
      } else{
        allAuthors[articleAuthor]++;
      }
      
      authorWrapper.innerHTML = html;
    }

    const authorList = document.querySelector(optAuthorsListSelector);

    const allAuthorsData = {authors: []};

    for(let author in allAuthors){
      allAuthorsData.authors.push({
        auth: author
      });
    }

    authorList.innerHTML = templates.authorsList(allAuthorsData);  
  }

  generateAuthors();

  function authorClickHandler(event){

    event.preventDefault();

    const clickedElement = this;

    const href = clickedElement.getAttribute('href');

    const author = href.replace('#author-', '');

    const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');

    for(let activeLink of authorLinks){

      activeLink.classList.remove('active');

    }

    const hrefAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');

    for(let hrefAuthorLink of hrefAuthorLinks){

      hrefAuthorLink.classList.add('active');
    }
  
    generateTitleLinks('[data-author="' + author + '"]');
    linkClick();
  }

  function addClickListenersToAuthors(){

    const allLinks = document.querySelectorAll('a[href^="#author-"]');

    for(let eachLink of allLinks){

      eachLink.addEventListener('click', authorClickHandler);

    }
  }

  addClickListenersToAuthors();
}