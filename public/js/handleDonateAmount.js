$(function () {
  console.log('handleDonateAmount.js loaded');
  // when custom amount input is focused, uncheck all radio buttons
  $('#customAmount').on('focus', function () {
    $('input[type="radio"][name="amount"]').prop('checked', false);
  });
});