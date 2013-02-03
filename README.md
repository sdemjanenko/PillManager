#PillManager
Lightweight JS pill collection

## Usage
### DOM
Add a container element
    <div id="pill-collection"></div>

### Create a new PillCollection
    var foo = new PillCollection($('#pill-collection'));

### Add a pill
You can add a pill with a value and/or customize the text in the pill.  If no text is given it defaults to the passed value.
    foo.addPill("value");
    foo.addPill("value", "text");

### Reset
Clear out the pills to a blank state, or set the desired state.
    foo.reset();
    foo.reset([['fooVal', 'fooText'], ['bar']]);

### Value
Access the current state representated in the collection
    foo.value()

##Dependencies
- jQuery
