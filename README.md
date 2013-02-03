#PillManager
Lightweight JS pill collection

##Usage
###Create a new PillCollection
    var foo = new PillCollection($('body'));

###Add a pill
    foo.addPill("value");
    foo.addPill("value", "text");

###Reset
    foo.reset();
    foo.reset([['fooVal', 'fooText'], ['bar']]);

##Dependencies
- jQuery
