<?php
/**
* $terms - the raw vocabulary term array selected
*   based on the type of task and title of the task
* $term_fields - the form array containing the term
*   and elements
**/
?>

<div class="credit-list-container">
    <h2 class="credit-header">
        Credits
    </h2>
    <?php foreach ($test_form as $item => $form): ?>
        <div class="credit-form-row">
            <?php print render($form);?>
        </div>
    <?php endforeach; ?>
</div>