function skillMember() {
    var member = document.getElementById("member");
    var skill = document.getElementById("skill");
    var skillMember = document.getElementById("skillMember");
    var memberValue = member.options[member.selectedIndex].value;
    var skillValue = skill.options[skill.selectedIndex].value;
    var skillMemberValue = memberValue + skillValue;
    skillMember.value = skillMemberValue;
}