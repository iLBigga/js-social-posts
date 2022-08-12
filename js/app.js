const posts = [
    {
        id : 1,
        autore : {
            nome : 'Pablo Escobar',
            foto : 'https://picsum.photos/70/70',
        },
        data :  '24-01-2019',
        contenuto : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, non.',
        immagine : 'https://picsum.photos/300/200',
        like : 46,
    },
    {
        id : 2,
        autore : {
            nome : 'George Jung',
            foto : 'https://picsum.photos/70/70',
        },
        data :  '06-11-2020',
        contenuto : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, non.',
        immagine : 'https://picsum.photos/300/200',
        like : 98,
    },
    {
        id : 3,
        autore : {
            nome : 'Saul Goodman',
            foto : 'https://picsum.photos/70/70',
        },
        data :  '03-09-2022',
        contenuto : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, non.',
        immagine : 'https://picsum.photos/300/200',
        like : 24,
    },
];


const container = document.getElementById('container');
getPost();


function getPost() {
    let postLike = [];
    posts.forEach(element => {

        const post = document.createElement('div');
        post.className = 'post';




        // POST HEADER
        const postHeader = document.createElement('div');
        postHeader.className = 'post__header';
        post.append(postHeader);

        const postMeta = document.createElement('div');
        postMeta.classList = 'post-meta';
        postHeader.append(postMeta);

        const postMetaIcon = document.createElement('div');
        postMetaIcon.className = 'post-meta__icon';
        postMeta.append(postMetaIcon);

        const profileImg = document.createElement('img');
        profileImg.className = 'profile-pic';
        profileImg.src = element.autore.foto;
        profileImg.alt = element.autore.nome;
        postMetaIcon.append(profileImg);

        const postData = document.createElement('div');
        postData.className = 'post-meta__data';
        postMeta.append(postData);

        const postAuthor = document.createElement('div');
        postAuthor.className = 'post-meta__author';
        postAuthor.innerHTML = element.autore.nome;
        postData.append(postAuthor);

        const postTime = document.createElement('div');
        postTime.className = 'post-meta__time';
        postTime.innerHTML = element.data;
        postData.append(postTime);




        // POST BODY
        const postText = document.createElement('div');
        postText.className = 'post__text';
        postText.innerHTML = element.contenuto;
        post.append(postText);

        const postImg = document.createElement('div')
        postImg.className = 'post__image';
        post.append(postImg);

        const imgEl = document.createElement('img');
        imgEl.src = element.immagine;
        postImg.append(imgEl)




        // POST FOOTER
        const postFooter = document.createElement('div');
        postFooter.className = 'post__footer';
        post.append(postFooter);

        const likes = document.createElement('div');
        likes.className = 'likes js-likes';
        postFooter.append(likes)

        const likesCta = document.createElement('div');
        likesCta.className = 'likes_cta';
        likes.append(likesCta);

        const a = document.createElement('a');
        a.className = 'like-button  js-like-button';
        a.dataset.postid = element.id; 
        likesCta.append(a);

        const i = document.createElement('i');
        i.className = 'like-button__icon fas fa-thumbs-up';
        a.append(i);

        const likeIcon = document.createElement('span');
        likeIcon.classlist = 'like-button__label';
        likeIcon.innerHTML = ' Mi piace';
        a.append(likeIcon);

        const likesCounter = document.createElement('div');
        likesCounter.className = 'likes__counter';
        likes.append(likesCounter);

        const b = document.createElement('b');
        b.className = 'js-likes-counter';
        b.innerHTML = `${element.like} persone`
        likesCounter.append(b);

        
        // EVENT LISTENER
        a.addEventListener('click', function(){
            a.classList.add('like-button--liked');
            b.innerHTML = `${element.like+1} persone`;
            postLike.push(element.id)
            console.log(postLike)
        })

        container.append(post);
    })
}

