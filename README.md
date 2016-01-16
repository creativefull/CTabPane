# Cermai Tab Panel
library tab panel

## How To Use
very easy guest first you must call <code> cTab.css </code> on the directory <code> dist/css </code> and <code> jquery.min.js </code> , <code> cTab.js </code> on the directory <code> dist/js</code>

```
<link rel='stylesheet' href='dist/css/cTab.css'>
<script src='dist/js/jquery.min.js'></script>
<script src='dist/js/cTab.js'></script>
```

oke after it you can following code like this

```
<div class='ctab' id='ctab1'>
  <div class='ctab-header'>
    <a href='#tab1'>Tab 1</a>
  </div>
  
  <div class='ctab-content'>
    <div id='tab1'>
      Welcome In Tab Pane By CermaiJS
    </div>
  </div>
</div>
```
remember <code> id </code> on <code> div </code> must be same with <code> href </code> on your <code> a </code>

## Add New Tab
CTabPane now support to add dynamic tab with simple code . this is API for add new tab
```
$(selectorID).addTab(title, contentHTML);
```
**Example**
```
$("#panel1").addTab("New Tab", "<h1>Hi This is New Tab</h1>");
```

**Example using ajax***
```
$.ajax({
  url : '/yourUrl',
  success : function(msg) {
    $("#panel1").addTab("New Tab", msg);
  }
})
```

## Support
* [CermaiJS](https://github.com/creativefull/cermai)
