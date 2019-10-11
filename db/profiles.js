var profileList = [];

// Boys
addProfile(1, 'Nick', 'Woolard', '3', '3EE', 'person1');
addProfile(2, 'Jan', 'Jansens', '1', '1Ta', 'person2');
addProfile(3, 'Kenny', 'Caccy', '4', '4IW', 'person3');
addProfile(4, 'Jack', 'Jacks', '5', '5EOt', 'person4');
addProfile(5, 'Emil', 'Braden', '1', '1IW', 'person5');

// Girls
addProfile(6, 'Emma', 'Mcgarry', '6', '6IW', 'person6');
addProfile(7, 'Karine', 'Brazeal', '5', '6BHk', 'person7');
addProfile(8, 'Karen', 'Rawley', '3', '3Mt', 'person8');
addProfile(9, 'Leila', 'Boner', '2', '2IW', 'person9');
addProfile(10, 'Ella', 'Klaasens', '6', '6IW', 'person10');

function addProfile(_id, _name, _surname, _year, _class, _picture_name) {
    var profile = {
        id: _id,
        name: _name,
        surname: _surname,
        year: _year,
        class: _class,
        picture_name: _picture_name
    };

    profileList.push(profile);
}

module.exports = {profileList};