class toItemManager {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }

    doItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items[index].status = 'done';
        }
    }

    getItem(index) {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
        return null;
    }

    getItems() {
        return this.items;
    }
}

const itemManager = new toItemManager();

function addItem(itemText) {
    itemManager.addItem({ status: 'todo', text: itemText });
}
function removeItem(index) {
    itemManager.removeItem(index);
}
function doItem(index) {
    itemManager.doItem(index);
}
function getItem(index) {
    return itemManager.getItem(index);
}
function getItems() {
    return itemManager.getItems();
}
function addDummyItems() {
    for (let i = 0; i < 10; i++) {
        const dummyItemText = `This is a sample to-do item, automatically generated for demonstration purposes. It serves as a placeholder to visualize how items will appear in your to-do list. Feel free to mark it as 'done' or remove it. Each item in this list represents a task you need to complete. You can add, remove, and mark items as done using the controls provided. This particular item is number ${i + 1} in the series of dummy items.`;
        addItem(dummyItemText);
        console.log(`Added item ${i + 1}:`, dummyItemText);
    }
}

addDummyItems();

fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('quotes-text').innerHTML = data.quote;
    })
    .catch(error => {
        console.error('Error fetching quote:', error);
        document.getElementById('quotes-text').innerHTML = 'Good Morning, Beautiful !!!';
    });