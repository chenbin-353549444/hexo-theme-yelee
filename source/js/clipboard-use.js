/*页面载入完成后，创建复制按钮*/
!function (e, t, a) {
    /* code */
    var initCopyCode = function(){
        var copyHtml = '';
        copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
        copyHtml += '  <i class="fa fa-clipboard" title="点我复制"></i>';
        copyHtml += '</button>';
        $(".highlight table").before(copyHtml);
        new ClipboardJS('.btn-copy', {
            target: function(trigger) {
                return trigger.nextElementSibling;
            }
        }).on('success', function(e) {
            $.gritter.add({
                title: '消息',
                text: '复制成功●\'◡\'●',
                image: '/blog/img/avatar.png',
                time: 1000,
                speed:500,
                sticky: false
            });
            e.clearSelection();
        });
    };
    initCopyCode();
}(window, document);