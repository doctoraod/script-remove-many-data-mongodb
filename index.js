var start = new Date("2020-02-13T00:00:00.000Z")
var end = new Date("2020-06-30T00:00:00.000Z")
var diffDay = 139
var step = 5
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function generateId(date) {
  var ms = date.getTime()
  var sec = Math.floor(ms / 1000)
  var hex = sec.toString(16)
  var id_string = hex + "0000000000000000"
  return id_string
}
var current = start
var idList = []
// for (var i = 0; i < 10; i++) {
  console.log('Count:', Math.ceil(diffDay / step))
for (var i = 0; i < Math.ceil(diffDay / step); i++) {
  var currentStart = current
  var currentEnd = addDays(current, step)
  current = addDays(current, step)
  idList.push({ start: currentStart, end: currentEnd, idStart: generateId(currentStart), idEnd: generateId(currentEnd) })
}
// console.log(idList)
// ObjectId("60827cdfc7114c00542776ac")
// ObjectId("60827ca00000000000000000")
idList.map(val => {
  console.log('//', val.start, '-', val.end)
  console.log(`db.getCollection('logs').remove({_id: {
    $gte: ObjectId("${val.idStart}"),
    $lt:  ObjectId("${val.idEnd}"),
  }})`)
})





