var app = new Vue({
    el: '#app',
    data: {
        indexImmagini = 0
      obj: [
        {
            url: './assets/img/animesh-bhargava-dxZMLX7qRGE-unsplash.jpg',
            alt: 'descrizione immagine 1'
        },
        {
            url: './assets/img/annie-spratt-_VxyFCTEpW8-unsplash.jpg',
            alt: 'descrizione immagine 2'
        },
        {
            url: './assets/img/lukas-hron-ThKBvxwwvt4-unsplash.jpg',
            alt: 'descrizione immagine 3'
        },
        {
            url: './assets/img/marla-prusik-zh7pqPE8gCc-unsplash.jpg',
            alt: 'descrizione immagine 4'
        },
        {
            url: './assets/img/martin-dalsgaard-JL-VrQvjR-o-unsplash.jpg',
            alt: 'descrizione immagine 5'
        }
      ]
    },
    methods: {
        immagineSuccessiva(){
            if( this.indexImmagini < this.obj.length-1 ){
                this.indexImmagini++;
            }else {
                this.indexImmagini = 0;
            }
        },
        immaginePrecedente(){
            if( this.indexImmagini <= 0 ){
                this.indexImmagini = this.obj.lenght-1;
            }else {
                this.indexImmagini--;
            }
        }
    }
})
