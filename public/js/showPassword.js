$(function () {
  $(document).on('click', '#togglePassword', function () {
    const password = $('#password');
    const type = password.attr('type') === 'password' ? 'text' : 'password';
    password.attr('type', type);

    //toggle the eye icon
    $(this).toggleClass('fa-eye fa-eye-slash');
  });
});