/**
 * Created by c0cuife on 3/29/2016.
 */
angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function($scope, $filter,
                                            productListActiveClass, productListPageCount, cart){
        var selectedCategory = null;
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function(newCategory){
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function(newPage){
            $scope.selectedPage = newPage;
        }

        /**filter function returns ture if the selectedCategory is null or category
         * property is selectedCategory **/
        $scope.categoryFilterFn = function(product){
            return selectedCategory == null ||
                    product.category == selectedCategory;
        }

        $scope.getCategoryClass = function(category){
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.getPageClass = function(page){
            return $scope.selectedPage == page ? productListActiveClass : "";
        }
        $scope.addProductToCart = function(item){
            cart.addProduct(item.id, item.name, item.price);
            console.log (item.id + item.name + item.price);
        }

    });