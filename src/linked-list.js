"use strict"
const Node = require('./node.js');

class LinkedList {

    constructor(head = null, length = 0, tail = null) {
        this._head = head;
        this.length = length;
        this._tail = tail;
    }

    append(data) {
        const newNode = new Node(data);

        if(this.isEmpty()) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;

        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var tempNode = this._head;
        for (var i = 0; i < index; i++) {
            tempNode = tempNode.next;
        }
        return tempNode.data;
    }

    insertAt(index, data) {
        if (this.isEmpty()) {
            this.append(data);
            return;
        }
        const newNode = new Node(data);
        var tempNode = this._head;
        for (var i = 0; i < index; i++) {
            tempNode = tempNode.next;
            if (tempNode.next == null) break;
        }
        tempNode.prev.next = newNode;
        newNode.prev = tempNode.prev;
        newNode.next = tempNode;
        tempNode.prev = newNode;
        this.length ++;
        return this;
    }

    isEmpty() {return !this.length}

    clear() {
        this._head = this._tail;
        this._head.data = null;
        this._head.next = null;
        this._head.prev = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var tempNode = this._head;
        for (var i = 0; i < index; i++) {
            tempNode = tempNode.next;
        }
        if (i == 0) {
            this.clear();
            return this;
        }
        tempNode.prev.next = tempNode.next;
        tempNode.next.prev = tempNode.prev;
        this.length --;
        return this;
    }

    reverse() {
        if (this.length <= 1) {return this}
        var tempNode = this._head;
        this._head = this._tail;
        this._head.next = this._head.prev;
        this._head.prev = null;
        var count = this._head;
        while (count !=tempNode) {
            count = count.next;
            var tempLink= count.prev;
            count.prev = count.next;
            count.next = tempLink;
        }
        this._tail = count;
        return this;
    }

    indexOf(data) {
        var tempNode = this._head;
        var i=0;
       while (data !== tempNode.data){
           if (!tempNode.next) {return -1}
            tempNode = tempNode.next;
            i++;
       }
        return i;
    }
}

module.exports = LinkedList;
