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
    optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks(){

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTtileListSelector);
    titleList.innerHTML = '';

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector);
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
  
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
  
    /* END LOOP: for every article: */
    }
  }
  
  generateTags();
}