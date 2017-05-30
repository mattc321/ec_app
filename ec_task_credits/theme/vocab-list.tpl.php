
<h1>Vocab List</h1>
<div class="credit-list-container">
        <?php foreach ($terms as $term_name): ?>
        <div class="credit-row">
                <div class="credit-cell credit-left">
                    <?php print $term_name->name; ?>
                </div>
                <div class="credit-cell credit-center">
                    <button id="credit-browse-<?php print $term_name->tid;?>" class="btn btn-secondary">Browse</button>
                </div>
                <div class="credit-cell credit-right">
                    <textarea name="credit-comment-<?php print $term_name->tid;?>" id="credit-comment-<?php print $term_name->tid;?>"></textarea>
                </div>
        </div>
        <?php endforeach; ?>


</div>
<?php dpm($terms);?>