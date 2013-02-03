#PillManager
Lightweight JS pill collection

## Usage
### DOM
Add a container element
    <div id="pill-collection"></div>

### Create a new PillCollection
    var foo = new PillCollection($('#pill-collection'));

### Add a pill
    foo.addPill("value");
    foo.addPill("value", "text");

### Reset
    foo.reset();
    foo.reset([['fooVal', 'fooText'], ['bar']]);

### Value
Access the current state representated in the collection
    foo.value()

##Dependencies
- jQuery
