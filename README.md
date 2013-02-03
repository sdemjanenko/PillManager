#PillManager
Lightweight JS pill collection

##Usage
###Create a new PillCollection
    var foo = new PillCollection($('body'));

###Add a pill
    foo.addPill("some value");

###Reset
Clear out the values
    foo.reset();
or set a particular value
    foo.reset(['foo', 'bar']);

##Dependencies
- jQuery
