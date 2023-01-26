
$.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    data: "data",
    dataType: "json",
    success: function (response) {
        let text = response.text;
        let year = response.year;
        let number = response.number;
        let found = response.found;
        let type = response.type;
        $('.root').html(`
            <div class="card">
                <div class="card-header">
                    <h3>${type}</h3>
                </div>
                <div class="card-body">
                    <p>${text}</p>
                    <p>Year: ${year}</p>
                    <p>Number: ${number}</p>
                    <p>Found: ${found}</p>
                </div>
            </div>
        `);
    }
});

$("#upload").submit(function(e) {
    e.preventDefault();
    var formData = new FormData($(this)[0]);
    console.log(formData);
    $.ajax({
      url: "http://localhost:3001/upload",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          console.log(response);
          alert("Image uploaded successfully")
      },
      error: function(jqXHR, textStatus, errorMessage) {
        console.log(errorMessage);
      }
    });
  });
    console.log('clicked')

