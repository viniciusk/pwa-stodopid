var vueObject = new Vue({
    el: '#app',
    data: {
        // State control
        isProcessing: false,
        isListEmpty: true,
        // To Do list
        nextToDoItemInput: '',
        stodopidlyList: storageGetList(),
    },
    methods: {
        checkStodopidlyList: function () {
            if (vueObject.stodopidlyList.length === 0) {
                vueObject.isListEmpty = true;
            } else {
                vueObject.isListEmpty = false;
            }
            storageSaveList(vueObject.stodopidlyList);
        },
        addNextToDoItem: function () {
            vueObject.stodopidlyList.push(vueObject.nextToDoItemInput);
            vueObject.nextToDoItemInput = '';
            vueObject.isListEmpty = false;
            vueObject.checkStodopidlyList();
        },
        removeToDoItem: function (index) {
            this.$delete(this.stodopidlyList, index);
            vueObject.checkStodopidlyList();
        },
    }
});
// On page ready
(function () {
    vueObject.checkStodopidlyList();
})();
