define(['collection-view', 'view/store'],
function(CollectionView, StoreView) {
  return CollectionView.extend({
    className: 'stores',
    tagName: 'ul',
    itemView: StoreView
  });
});