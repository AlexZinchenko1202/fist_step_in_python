document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist49269311\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-pytorch-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-pytorch-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-pytorch-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> torch<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-pytorch-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> torch.autograd <span class=\"pl-k\">import<\/span> Variable<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-pytorch-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> numpy <span class=\"pl-k\">as<\/span> np<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-pytorch-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-pytorch-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">rmse<\/span>(<span class=\"pl-smi\">y<\/span>, <span class=\"pl-smi\">y_hat<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-pytorch-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-s\"><span class=\"pl-pds\">&quot;&quot;&quot;<\/span>Compute root mean squared error<span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-pytorch-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> torch.sqrt(torch.mean((y <span class=\"pl-k\">-<\/span> y_hat).pow(<span class=\"pl-c1\">2<\/span>).sum()))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-pytorch-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-pytorch-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">forward<\/span>(<span class=\"pl-smi\">x<\/span>, <span class=\"pl-smi\">e<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-pytorch-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-s\"><span class=\"pl-pds\">&quot;&quot;&quot;<\/span>Forward pass for our fuction<span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-pytorch-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> x.pow(e.repeat(x.size(<span class=\"pl-c1\">0<\/span>)))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-pytorch-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-pytorch-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Let&#39;s define some settings<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-pytorch-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">n <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">100<\/span> <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> number of examples<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-pytorch-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">learning_rate <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">5e-6<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-pytorch-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">target_exp <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">2.0<\/span> <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> real value of the exponent will try to find<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-pytorch-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-pytorch-py-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Model definition<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-pytorch-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">x <span class=\"pl-k\">=<\/span> Variable(torch.rand(n) <span class=\"pl-k\">*<\/span> <span class=\"pl-c1\">10<\/span>, <span class=\"pl-v\">requires_grad<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">False<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-pytorch-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-pytorch-py-LC21\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Model parameter and it&#39;s true value<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-pytorch-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">exp <span class=\"pl-k\">=<\/span> Variable(torch.FloatTensor([target_exp]), <span class=\"pl-v\">requires_grad<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">False<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-pytorch-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">exp_hat <span class=\"pl-k\">=<\/span> Variable(torch.FloatTensor([<span class=\"pl-c1\">4<\/span>]), <span class=\"pl-v\">requires_grad<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>) <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> just some starting value, could be random as well<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-pytorch-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">y <span class=\"pl-k\">=<\/span> forward(x, exp)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-pytorch-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-pytorch-py-LC26\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> a couple of buffers to hold parameter and loss history<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-pytorch-py-LC27\" class=\"blob-code blob-code-inner js-file-line\">loss_history <span class=\"pl-k\">=<\/span> []<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-pytorch-py-LC28\" class=\"blob-code blob-code-inner js-file-line\">exp_history <span class=\"pl-k\">=<\/span> []<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-pytorch-py-LC29\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-pytorch-py-LC30\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Training loop<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-pytorch-py-LC31\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">for<\/span> i <span class=\"pl-k\">in<\/span> <span class=\"pl-c1\">range<\/span>(<span class=\"pl-c1\">0<\/span>, <span class=\"pl-c1\">200<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-pytorch-py-LC32\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">print<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Iteration <span class=\"pl-c1\">%d<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-k\">%<\/span> i)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-pytorch-py-LC33\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-pytorch-py-LC34\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Compute current estimate<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-pytorch-py-LC35\" class=\"blob-code blob-code-inner js-file-line\">    y_hat <span class=\"pl-k\">=<\/span> forward(x, exp_hat)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-pytorch-py-LC36\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-pytorch-py-LC37\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Calculate loss function<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-pytorch-py-LC38\" class=\"blob-code blob-code-inner js-file-line\">    loss <span class=\"pl-k\">=<\/span> rmse(y, y_hat)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-pytorch-py-LC39\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-pytorch-py-LC40\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Do some recordings for plots<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-pytorch-py-LC41\" class=\"blob-code blob-code-inner js-file-line\">    loss_history.append(loss.data[<span class=\"pl-c1\">0<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-pytorch-py-LC42\" class=\"blob-code blob-code-inner js-file-line\">    exp_history.append(y_hat.data[<span class=\"pl-c1\">0<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-pytorch-py-LC43\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-pytorch-py-LC44\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Compute gradients<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-pytorch-py-LC45\" class=\"blob-code blob-code-inner js-file-line\">    loss.backward()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-pytorch-py-LC46\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L47\" class=\"blob-num js-line-number\" data-line-number=\"47\"><\/td>\n        <td id=\"file-pytorch-py-LC47\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">print<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>loss = <span class=\"pl-c1\">%s<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-k\">%<\/span> loss.data[<span class=\"pl-c1\">0<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L48\" class=\"blob-num js-line-number\" data-line-number=\"48\"><\/td>\n        <td id=\"file-pytorch-py-LC48\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">print<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>exp = <span class=\"pl-c1\">%s<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-k\">%<\/span> exp_hat.data[<span class=\"pl-c1\">0<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L49\" class=\"blob-num js-line-number\" data-line-number=\"49\"><\/td>\n        <td id=\"file-pytorch-py-LC49\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L50\" class=\"blob-num js-line-number\" data-line-number=\"50\"><\/td>\n        <td id=\"file-pytorch-py-LC50\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Update model parameters<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L51\" class=\"blob-num js-line-number\" data-line-number=\"51\"><\/td>\n        <td id=\"file-pytorch-py-LC51\" class=\"blob-code blob-code-inner js-file-line\">    exp_hat.data <span class=\"pl-k\">-=<\/span> learning_rate <span class=\"pl-k\">*<\/span> exp_hat.grad.data<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-pytorch-py-L52\" class=\"blob-num js-line-number\" data-line-number=\"52\"><\/td>\n        <td id=\"file-pytorch-py-LC52\" class=\"blob-code blob-code-inner js-file-line\">    exp_hat.grad.data.zero_()<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/kdubovikov/1213b0e92ec9236eacbd24d8511ebf86/raw/a19eab5c9abc9ee5b55c2e63d6ab2820fa225285/pytorch.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/kdubovikov/1213b0e92ec9236eacbd24d8511ebf86#file-pytorch-py\">pytorch.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
