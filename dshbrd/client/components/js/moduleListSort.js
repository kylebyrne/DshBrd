Template.moduleListSort.helpers({
    modules: function() {return Modules.find({}, {sort: {index: 1}})}
});

//Once the Template is rendered, run this function which
//  sets up JQuery UI's sortable functionality
Template.moduleListSort.rendered = function() {
    this.$('#moduleListSort').sortable({
        stop: function(e, ui) {
            // get the dragged html element and the one before
            //   and after it
            el = ui.moduleListSortItem.get(0)
            before = ui.moduleListSortItem.prev().get(0)
            after = ui.moduleListSortItem.next().get(0)

            // Here is the part that blew my mind!
            //  Blaze.getData takes as a parameter an html element
            //    and will return the data context that was bound when
            //    that html element was rendered!
            if (!before) {
                //if it was dragged into the first position grab the
                // next element's data context and subtract one from the rank
                newRank = Blaze.getData(after).index - 1
            } else if (!after) {
                //if it was dragged into the last position grab the
                //  previous element's data context and add one to the rank
                newRank = Blaze.getData(before).index + 1
            } else
            //else take the average of the two ranks of the previous
            // and next elements
                newRank = (Blaze.getData(after).index +
                Blaze.getData(before).index) / 2

            //update the dragged Item's rank
            Modules.update({
                _id: Blaze.getData(el)._id
            }, {
                $set: {
                    index: newRank
                }
            })
        }
    })
}
