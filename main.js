var lastSelectedRadio = null;

function toggleOptions(optionsId, radioId, dropdownsId) {
    var options = document.getElementById(optionsId);
    var radio = document.getElementById(radioId);
    var dropdowns = document.getElementById(dropdownsId);

    if (lastSelectedRadio === radio) {
        // If the same radio button is clicked again, unselect it
        radio.checked = false;
        options.style.display = 'none';
        dropdowns.style.display = 'none';
        lastSelectedRadio = null;
    } else {
        // Uncheck other radio buttons in the same group
        var radios = document.querySelectorAll('.radio');
        radios.forEach(function (otherRadio) {
            if (otherRadio !== radio) {
                otherRadio.checked = false;
            }
        });

        // Toggle the display of options and dropdowns based on the radio button state
        radio.checked ? showOptions(options, dropdowns) : hideOptions(options, dropdowns);
        lastSelectedRadio = radio;
    }
}

function showOptions(options, dropdowns) {
    options.style.display = 'block';
    dropdowns.style.display = 'block';
}

function hideOptions(options, dropdowns) {
    options.style.display = 'none';
    dropdowns.style.display = 'none';
}

// Usage example:
document.getElementById('topBoxCheckbox').addEventListener('change', function () {
    toggleOptions('topBoxOptions', 'topBoxCheckbox', 'topBoxDropdowns');
});

document.getElementById('middleBoxCheckbox').addEventListener('change', function () {
    toggleOptions('middleBoxOptions', 'middleBoxCheckbox', 'middleBoxDropdowns');
});

document.getElementById('bottomBoxCheckbox').addEventListener('change', function () {
    toggleOptions('bottomBoxOptions', 'bottomBoxCheckbox', 'bottomBoxDropdowns');
});
