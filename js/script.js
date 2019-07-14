'use-strict';

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

    const titleClickHandler = function(event){
        const clickedElement = this;
        console.log('Link was clicked!');
        console.log(event);

      /* [DONE] remove class 'active' from all article links */
        const activeLinks = document.querySelectorAll('.titles a.active');

        for(let activeLink of activeLinks){
            activeLink.classList.remove('active');
        }


      /* [IN PROOGRESS] add class 'active' to clicked link */

      console.log('clickedElement:', clickedElement);
      console.log('clickedElement (with plus): ' + clickedElement);
      clickedElement.classList.add('active');

      /* [DONE] remove class 'active' from all articles */
      const activeArticles = document.querySelectorAll('.posts .post.active');

        for(let activeArticle of activeArticles){
            activeArticle.classList.remove('active');
        }

      /* get 'href' attribute from clicked link */

      /* find correct article using selector (value of 'href' attribute) */

      /* add class 'active' to the correct artcle */
  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
      link.addEventListener('click', titleClickHandler);
  }
