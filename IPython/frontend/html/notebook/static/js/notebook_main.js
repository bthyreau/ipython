
//============================================================================
// On document ready
//============================================================================


$(document).ready(function () {

    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
        },
        displayAlign: 'left', // Change this to 'center' to center equations.
        "HTML-CSS": {
            styles: {'.MathJax_Display': {"margin": 0}}
        }
    });

    $('div#notebook_app').addClass('border-box-sizing ui-widget ui-widget-content');
    $('div#notebook_panel').addClass('border-box-sizing ui-widget');

    IPython.layout_manager = new IPython.LayoutManager();
//    IPython.save_widget = new IPython.SaveWidget('span#save_widget');
    IPython.pager = new IPython.Pager('div#pager', 'div#pager_splitter');
    IPython.left_panel = new IPython.LeftPanel('div#left_panel', 'div#left_panel_splitter');
    IPython.notebook = new IPython.Notebook('div#notebook');

    IPython.notebook.insert_code_cell_after();
    IPython.layout_manager.do_resize();
    IPython.pager.collapse();
});
