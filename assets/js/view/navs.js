define(['collection-view', 'view/nav-item'],
function(CollectionView, NavItemView) {
  return CollectionView.extend({
    className: 'navbar',
    tagName: 'ul',
    itemView: NavItemView
  });
});