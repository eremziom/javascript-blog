'use-strict';

{/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class 'active' from all article links */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }


    /* [DONE] add class 'active' to clicked link */

    console.log('clickedElement:', clickedElement);
    console.log('clickedElement (with plus): ' + clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .post.active');
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from clicked link */
    const atribute = clickedElement.getAttribute('href');
    console.log('atribute href for clikcked object :' + atribute);

    /* [DONE] find correct article using selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(atribute);
    console.log('Article we want : ', targetArticle);

    /* [DONE] add class 'active' to the correct artcle */
    targetArticle.classList.add('active');
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTtileListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

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
      console.log('got article ID: ', articleId);

      /* [DONE] find the list element */
      /* [DONE] get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log('articleTitle = ' + articleTitle);

      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* [DONE] insert link into titleList */
      html = html + linkHTML;
      console.log(html);
    }

    titleList.innerHTML = html;

  }

  generateTitleLinks();

  const links = document.querySelectorAll('.titles a');
  console.log(links);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  function generateTags(){
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
      console.log('tag data-tag: ' + articleTags);

      /* [DONE] split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);
  
      /* [DONE] START LOOP: for each tag */
      for (let tag of articleTagsArray){
        console.log('tagi to: ' + tag);

        /* [DONE] generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
        console.log(linkHTML);
  
        /* [DONE] add generated code to html variable */
        html = html + linkHTML + ' ';
  
      /* [DONE] END LOOP: for each tag */
      }
  
      /* [DONE] insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
  
    /* [DONE] END LOOP: for every article: */
    }
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
    console.log('cokolwiek?');

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

    const articles = document.querySelectorAll(optArticleSelector);

    for(let article of articles){

      const authorWrapper = article.querySelector(optArticleAuthorSelector);

      let html = '';

      const articleAuthor = article.getAttribute('data-author');
      console.log('autor to: ' + articleAuthor);

      const linkHTML = '<a href="#author-' + articleAuthor + '"><span>' + articleAuthor + '</sapn></a>';
      console.log(linkHTML);

      html = html + linkHTML;

      authorWrapper.innerHTML = html;

    }
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
    console.log('dziala?');
  }

  function addClickListenersToAuthors(){

    const allLinks = document.querySelectorAll('a[href^="#author-"]');

    for(let eachLink of allLinks){

      eachLink.addEventListener('click', authorClickHandler);

    }
  }

  addClickListenersToAuthors();
}