function myContextMenuDirective() {
    return {
        restrict: 'E',
        scope: { options: '=options' },
        template: template(),
        link: link
    }

    function template() {
        var template = '';
        template += '<ul class="contextmenu-wrapper" ng-style="contextMenuStyle">';
        template += '<li class="contextmenu-item" ng-repeat="item in options.listItem">{{ item.name }}</li>';
        template += '</ul>';

        return template;
    }

    function link(scope, element, attrs) {
        var _parentId = undefined;
        var _isShow = false;

        scope.contextMenuStyle = {
            display: 'none'
        };

        render();

        function render() {
            _parentId = '#' + scope.options.parentId;

            angular.element(document.querySelector(_parentId)).bind('contextmenu', onContextMenu);
        }

        function onContextMenu(event) {
            event.preventDefault();

            if (!_isShow) {
                _isShow = true;

                angular.element(document).on('click', onDocumentClick);
                angular.element(document).on('contextmenu', onDocumentContextMenu);
            }

            scope.contextMenuStyle = {
                display: 'block',
                top: event.clientY + 'px',
                left: event.clientX + 'px'
            };
            scope.$apply();
        }

        function onDocumentClick() {
            var currentElement = angular.element(event.target);

            if (currentElement.hasClass('contextmenu-wrapper'))
                return;
            if (currentElement.hasClass('contextmenu-item'))
                alert('item clicked');

            angular.element(document).off('click');
            angular.element(document).off('contextmenu');

            _isShow = false;
            scope.contextMenuStyle = { display: 'none' }
            scope.$apply();
        }

        function onDocumentContextMenu(event) {
            event.preventDefault();
        }
    }
}