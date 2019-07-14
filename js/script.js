'use-strict';

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

    const titleClickHandler = function(event){
        console.log('Link was clicked!');
        console.log(event);

      /* remove class 'active' from all article links */
        const activeLinks = document.querySelectorAll('.titles a.active');

        for(let activeLink of activeLinks){
            activeLink.classList.remove('active');
        }


      /* add class 'active' to clicked link */
        const activeArticles = document.querySelectorAll('.posts .post.active');

        for(let activeArticle of activeArticles){
            activeArticle.classList.remove('active');
        }

      /* remove class 'active' from all articles */

      /* get 'href' attribute from clicked link */

      /* find correct article using selector (value of 'href' attribute) */

      /* add class 'active' to the correct artcle */
  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
      link.addEventListener('click', titleClickHandler);
  }
