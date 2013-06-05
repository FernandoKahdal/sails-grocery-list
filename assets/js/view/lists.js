define(['collection-view', 'view/list'],
function(CollectionView, ListView) {
  return CollectionView.extend({
    className: 'lists',
    tagName: 'ul',
    itemView: ListView
  });
});