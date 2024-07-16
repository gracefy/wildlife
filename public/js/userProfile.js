$(function () {
  $(document).on('click', '.profile-tab', function (e) {
    e.preventDefault();

    // Remove 'active' class from all tabs
    $('.profile-tab').removeClass('active');

    // Add 'active' class to the clicked tab
    $(this).addClass('active');

    // Get the data-tab attribute value
    var tab = $(this).data('tab');

    // Hide all tab contents
    $('.item').hide();

    // Show the corresponding tab content
    $('#' + tab).show();
  });

  // Show initial tab content (e.g., profile tab)
  $('#profile').show();


  // Show/hide the edit profile form
  $(document).on('click', '#editProfile', function (e) {
    e.preventDefault();
    $('#editForm').toggle();
  });

  $('#editForm').hide();

  // Show/hide the change password form
  $(document).on('click', '#changePassword', function (e) {
    e.preventDefault();
    $('#passwordForm').toggle();
  });

  $('#passwordForm').hide();
});