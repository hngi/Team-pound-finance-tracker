(function(){
    const addEntriesBtn = document.getElementById("add-entries");
    const createEntries = document.querySelector(".create-entries");
    const closeEntriesBtn = document.querySelector(".close-entries");
    const entryForms = document.querySelector(".entry-forms");
    const addItem = document.getElementById("add-item");
    let createdEntries = 0;

    function entryTemplate(entryId){
        return `<div class="entry-form">
            <span class="entry-id">#${entryId}</span>
            <div class="input-1">
                <input type="text" id="item-${entryId}" class="form-input" name="item" placeholder="item/description">
            </div>
            <div class="input-2">
                <input type="number" name="amount" id="amount-${entryId}" class="form-input" placeholder="amount">
            </div>
            <div class="entry-btn">
                <button class="save-item btn btn-sm btn-ascent" id="submit-${entryId}"><span data-feather="check"></span></button>
            </div>
        </div>`;
    }

    function addEntries(){
        createdEntries++;
        let entry = document.createElement('div');
        let template = entryTemplate(createdEntries);
        entry.innerHTML = template;

        entryForms.appendChild(entry);
    }

    addEntriesBtn.addEventListener('click', function () {
        createEntries.style.display = "block";
        
        for(i=0; i < 2; i++){
            addEntries();
        }

        feather.replace();
    });
    
    addItem.addEventListener('click', function(e){
        addEntries();
        feather.replace();

        e.preventDefault();
    });

    closeEntriesBtn.addEventListener('click', function () {
        if (confirm("Do you want to close entries? All unsaved records would be lost.")) {
            createEntries.style.display = "none";
            createdEntries = 0;
            entryForms.innerHTML = "";
        }
    });
})();