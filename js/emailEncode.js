function emailEncode() {
    function rdn(minNum, maxNum) { switch (arguments.length) { case 1: return parseInt(Math.random() * minNum + 1, 10); break; case 2: return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10); break; default: return 0; break; } };
    var tag = ".email"
    var email = $(tag).attr("mail").replace("-", "@")
    var letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@=-*/.~#$%^&*()_+|{}[]".split("");
    var mailAdress = email.split("");
    function rdLetterAdd(rdLetter) { return "<span style=\"display:none;\">" + rdLetter + "<\/span>" };
    var emailReturn = "";
    for (i = 0; i < mailAdress.length; i++) { emailReturn += rdLetterAdd(letter[rdn(0, 83)]) + rdLetterAdd(letter[rdn(0, 83)]) + mailAdress[i] + rdLetterAdd(letter[rdn(0, 83)]) + rdLetterAdd(letter[rdn(0, 83)]) };
    $(tag).html(emailReturn);
    $(tag).attr("href", "mailto:" + email);
}
/*
<a href="#" class="email" mail="xhemj2680-163.com">[@]</a>
<script src="https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js"></script>
<script>
emailEncode()
</script>
*/
