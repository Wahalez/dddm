$(document).ready(function () {
    // Function to populate the product table
    function populateProductTable() {
      // Sample data for demonstration
      const products = [
        {
          type: "user 1",
          userType: "soplier",
          productType: "product",
        },
        {
          type: "user 2",
          userType: "regular",
          productType: "Sony Playstation",
        },
   
      ];
  
     
      $("#productTableBody").empty();
  
    
      for (const product of products) {
        // Create a new table row
        const row = $("<tr></tr>");
  
        // Add table cells for each product property
        row.append(`<td>${product.type}</td>`);
        row.append(`<td>${product.userType}</td>`);
        row.append(`<td>${product.productType}</td>`);
  
        // Create an "Edit" button and add an event listener
        const editButton = $("<button></button>")
          .text("Edit")
          .addClass("btn btn-primary btn-sm")
          .click(function () {
            // Handle the edit button click event here
            console.log(`Edit button clicked for ${product.name}`);
  
            // Create the modal popup
            const modal = $("<div></div>")
              .addClass("modal fade")
              .attr("id", "editModal")
              .attr("tabindex", "-1")
              .attr("aria-labelledby", "editModalLabel")
              .attr("aria-hidden", "true");
  
            // Create the modal dialog
            const modalDialog = $("<div></div>")
              .addClass("modal-dialog")
              .appendTo(modal);
  
            // Create the modal content
            const modalContent = $("<div></div>")
              .addClass("modal-content")
              .appendTo(modalDialog);
  
            // Create the modal header
            const modalHeader = $("<div></div>")
              .addClass("modal-header")
              .appendTo(modalContent);
  
            // Add the close button to the modal header
            const closeButton = $("<button></button>")
              .addClass("btn-close")
              .attr("type", "button")
              .attr("data-bs-dismiss", "modal")
              .attr("aria-label", "Close")
              .appendTo(modalHeader);
  
            // Create the modal title
            const modalTitle = $("<h5></h5>")
              .addClass("modal-title")
              .attr("id", "editModalLabel")
              .text(`Edit Product: ${product.name}`)
              .appendTo(modalHeader);
  
            // Create the modal body
            const modalBody = $("<div></div>")
              .addClass("modal-body")
              .appendTo(modalContent);
  
            // Create the form for editing the product
            const editForm = $("<form></form>").appendTo(modalBody);
  
            // Add form fields for each property of the product
            editForm.append(`
            <div class="mb-3">
            <label for="editProductName" class="form-label">User Name</label>
            <input type="text" class="form-control" id="editProductName" value="${product.type}" required>
          </div>
          <div class="mb-3">
            <label for="editDescription" class="form-label">User Type</label>
            <input type="text" class="form-control" id="editProductName" value="${product.userType}" required>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="editPrice" class="form-label">Amount of Product Buy or Enter</label>
                <input type="number" class="form-control" id="editPrice" value="${product.productType}" required>
              </div>
            </div>
          </div>
          <button id="deleteUserBtn" class="btn btn-danger" disabled>Delete User</button>
          
              `);
            // Create the modal footer
            const modalFooter = $("<div></div>")
              .addClass("modal-footer")
              .appendTo(modalContent);
  
            // Add the save button to the modal footer
            const saveButton = $("<button></button>")
              .addClass("btn btn-primary")
              .attr("type", "button")
              .text("Save Changes")
              .appendTo(modalFooter);
  
            // Handle the save button click event
            saveButton.click(function () {
              // Get the updated values from the form
              const updatedProduct = {
                name: $("#editProductName").val(),
                description: $("#editDescription").val(),
                price: parseFloat($("#editPrice").val()),
                stock: parseInt($("#editStock").val()),
                category: $("#editCategory").val(),
                platform: $("#editPlatform").val(),
              };
  
              // Perform any necessary update operations with the updated product data
  
              // Close the modal popup
              modal.modal("hide");
            });
  
            // Append the modal to the document body
            $("body").append(modal);
  
            // Show the modal popup
            modal.modal("show");
          });
  
        // Add the edit button to the table row
        row.append($("<td></td>").append(editButton));
  
        // Add the table row to the product table body
        $("#productTableBody").append(row);
      }
    }
  
    // Call the function to populate the product table
    populateProductTable();
  });
  