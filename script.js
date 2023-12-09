function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  console.log(`${day}-${month}-${year}`);
  return `${day}-${month}-${year}`;
}

// Event listener for date input changes
document
  .getElementById("customDatePicker")
  .addEventListener("input", function () {
    const inputDate = new Date(this.value);
    console.log(inputDate);
    if (!isNaN(inputDate.getTime())) {
      document.getElementById("date-pick").innerText = formatDate(inputDate);
    } else {
      console.log("Invalid date");
    }
  });
document.getElementById("date").addEventListener("click", function () {
  // Toggle the visibility of the date picker container
  console.log("aiman");
  var datePickerContainer = document.getElementById("customDatePicker");
  datePickerContainer.style.display =
    datePickerContainer.style.display === "block" ? "none" : "block";
});

////////////////
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("openModalBtn")
    .addEventListener("click", function () {
      document.getElementById("myModal").style.display = "block";
      // Retrieve selected file and display it in the modal
      var fileInput = document.getElementById("attachmentInput");
      var file = fileInput.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("attachmentPreview").innerHTML =
            '<img src="' +
            e.target.result +
            '" alt="Attachment Preview" width="200" />';
        };
        reader.readAsDataURL(file);
      }
    });

  document
    .getElementById("closeModalBtn")
    .addEventListener("click", function () {
      document.getElementById("myModal").style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("attachmentInput")
    .addEventListener("change", function () {
      // Clear previous list view
      document.getElementById("attachmentList").innerHTML = "";

      // Display a list of attachments
      var files = this.files;
      if (files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var fileName = files[i].name;
          var fileExtension = fileName.split(".").pop();
          document.getElementById("attachmentList").innerHTML +=
            "<li>" + fileName + " (" + fileExtension + ")</li>";
        }
      }
    });
});
