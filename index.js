var app = angular.module('gemStore', []);

//fonction/controller d'une zone
  app.controller('StoreController', function(){
    //tableau des produits
    this.products = gems;
  });

//Permet de changer et verifier la valeur de l'onglet
app.controller('TabController', function(){
  //initialise tab à 1 par défaut
  this.tab = 1;
  //permet de changer la valeur de tab selectTab(X)
  this.selectTab = function(setTab){
    this.tab = setTab;
  }
  //permet de verifier si le 'checkTab' est égale à la valeur actuelle de tab isSelect(X)
  this.isSelect = function(checkTab){
    return this.tab === checkTab;
  }
});


//Permet d'ajouter la review
app.controller('ReviewController', function(){
  //Créer un tableau vide
  this.review = {};
  //Ajoute tout les éléments de l'objet 'review' actuel
  this.addReview = function(product){
    this.review.createdOn = Date.now();
    product.reviews.push(this.review);
    //Recrée un tableau vide aprés l'envoi
    this.review = {}
  }
});

//Permet de faire un includes d'un fichier.html
app.directive('productDescription', function(){
  return{
    restrict : 'A',
    templateUrl : 'product-Description.html',
  }
});

  var gems = [
    {
      name: 'Azurite',
      price: 110.50,
      description: 'petite chose',
      //si true montre le panier 'add to cart'
      canPurchase: true,
      reviews: [
        {
          stars: 5,
          body: 'This gems is fabulous !',
          author: 'joe@john.com',
        },
        {
          stars: 1,
          body: 'This is outrageous, i can do better!',
          author: 'Taric@league.com',
        },
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 2,
      description: 'chose institutionelle',
      canPurchase: true,
      reviews: [
        {
          stars: 5,
          body: 'This gems is fabulous !',
          author: 'joe@john.com',
        },{
          stars: 1,
          body: 'This is outrageous, i can do better!',
          author: 'Taric@league.com',
        },
      ]
    }
  ];
