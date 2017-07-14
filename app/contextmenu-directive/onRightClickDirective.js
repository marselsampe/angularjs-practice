function onRightClickDirective()
{
  return {
    restrict : 'A',
    link : OnRightClick
  };

  function OnRightClick( scope, element, attrs )
  {
    element.bind( "contextmenu", DoOnRightClick );

    function DoOnRightClick( event )
    {
      //  alert('right click');
    }
  }
}