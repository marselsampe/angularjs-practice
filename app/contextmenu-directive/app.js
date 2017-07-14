var mainModule = angular.module("MyApp", []);

mainModule.directive('myContextmenu', [myContextMenuDirective]);

mainModule.controller('myCtrl', function ($scope) {
    var _contextMenuItems = [
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' }
    ];

    $scope.ContextMenuOptions = {
        parentId: 'container1',
        listItem: _contextMenuItems,
    }
});