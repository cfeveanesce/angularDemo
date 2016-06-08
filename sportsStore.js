/**
 * Created by c0cuife on 3/29/2016.
 */
angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:63342/list")
    .controller("sportsStoreCtrl",function($scope, $http, dataUrl, $location){
      $scope.data = {
            products: [
                {id: "1", name:"Product #1", description: "A product", category:"Category #1", price:"100"},
                {id: "2", name:"Product #2", description: "A product", category:"Category #1", price:"110"},
                {id: "3", name:"Product #3", description: "A product", category:"Category #2", price:"210"},
                {id: "4", name:"Product #4", description: "A product", category:"Category #3", price:"202"}
            ]
        };
     /* $scope.data = {};
        $http.get(dataUrl)
            .success(function(data){
                $scope.data.products = data;
                console.log(data);
                console.log("success in angular");
            })
            .error(function(error){
                $scope.data.error = error;
                console.log(error);
            });
*/
        $scope.checkOutSubmit = function(){
            $location.path("/checkout");
        }
        $scope.gotoProductList = function(){
            $location.path("/products");
        }
        $scope.gotoPlaceorder = function(){
            $location.path("/placeorder");
        }

        $scope.sendOrder = function(shippingDetails){
            //create a copy of the shipping details object so I can safely manipulate it
            var order = angular.copy(shippingDetails);
            order.products = cart.getProducts();
            $http.post(orderUrl, order)
                .success(function(data){
                    $scope.data.orderId = data.id;
                    cart.getProducts().length = 0;
                }).error(function(error){

                }).finally(function(){
                    $location.path("/complete");
                });
        }

    });