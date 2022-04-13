let $form = document.querySelector('.search-form');
let $searchInput = $form.querySelector('#search');
let $animes = document.querySelector('.animes');
let $mother = document.querySelector('.col-3.mb-4')
/* let $card = document.querySelector('.anime.card') */
/* let $img_card = document.querySelector('.card-img-top') */
/* let $div_card = document.querySelector('.card-body') */
/* let $h5 = document.querySelector('.card-title')
let $p = document.querySelector('.card-text') */
/* let $ahref_card = document.querySelector('.btn btn-primary') */
let $euh = document.querySelector('.animes.row')

let btn = document.querySelectorAll('.pagination li')
index = 1;
let search;
let search_like;



btn[0].addEventListener('click', function(){
    $euh.textContent= '';
    index -= 1;

    algo(index)
    

    console.log(index);
})

btn[1].addEventListener('click', function(){
    $euh.textContent= '';
    console.log(index);
    index += 1;

    algo(index)

    console.log(index);
})

let look;
// à vous de jouer
// remplcer le XXX par la valeur du input
// afficher les animes dans la page
// voici l'API : https://api.jikan.moe/v4/anime?limit=10&q=XXXX



$form.addEventListener('submit', function(e){
    $euh.textContent= '';
    
    e.preventDefault();
    look = 'https://api.jikan.moe/v4/anime?limit=12&q=' + search+ '&page=' + index;
    console.log(look) 
    search_like = search;
    algo(index)

    
    $searchInput.value = '';
    
    console.log($searchInput.value)
    
    console.log(index);
    
})

function algo (index){
    search = $searchInput.value;
    fetch('https://api.jikan.moe/v4/anime?limit=12&q=' + search_like+ '&page=' + index )
    
    .then(function(kawaii){
        console.log(index);
        console.log('test')

        return kawaii.json()
    })
    .then(function(anime){
        let sum = anime.pagination.items.count;
        let all_animes;
        
        
        for(let i = 0; i < sum; i++){ 
            
           all_animes = anime.data[i]
            let $img = document.createElement('img');
            $img.setAttribute('src' , all_animes.images.jpg.large_image_url)
            let $div = document.createElement('div')
            let $div2 = document.createElement('div')
            let $div3 = document.createElement('div')
            let $hh5 = document.createElement('h5')
            let $pp = document.createElement('p')
            let $a = document.createElement('a')

            $div.classList.add('col-3', 'mb-4')
            $div2.classList.add('anime', 'card')
            $div3.classList.add('card-body')
            $img.classList.add('card-img-top')
            $hh5.classList.add('card-title')
            $pp.classList.add('card-text')
            $a.classList.add('btn', 'btn-primary')

            $euh.appendChild($div)
            $div.appendChild($div2)
            $div2.appendChild($img)
            $div2.appendChild($div3)
            $div3.appendChild($hh5)
            $div3.appendChild($pp)
            $div3.appendChild($a)
            $img.setAttribute('src' , all_animes.images.jpg.large_image_url)
            $a.setAttribute('href' , all_animes.url)
            console.log(all_animes.url)
            console.log(anime.data[0].title)

            $hh5.textContent = anime.data[i].title
            console.log(all_animes.title)
            $pp.textContent = all_animes.synopsis
            $a.textContent = 'Go somewhere'

            /* $euh.appendChild($img) */
        }

/*             $test.appendChild($img) */
        


    })
}