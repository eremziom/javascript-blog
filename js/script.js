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
      const atribute = clickedElement.getAttribute("href");
      console.log('atribute href for clikcked object :' + atribute);

      /* [DONE] find correct article using selector (value of 'href' attribute) */
      const targetArticle = document.querySelector(atribute);
      console.log('Article we want : ', targetArticle);

      /* [DONE] add class 'active' to the correct artcle */
      targetArticle.classList.add('active');
  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
      link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTtileListSelector = '.titles';

  function generateTitleLinks(){

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTtileListSelector);
      titleList.innerHTML = '';

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector);
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

      /* [IN PROGRES] insert link into titleList */
      titleList.innerHTML = titleList.innerHTML + linkHTML;
    }

  }

  generateTitleLinks();
}