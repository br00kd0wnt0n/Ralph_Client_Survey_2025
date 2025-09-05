/**
 * Google Apps Script for Ralph Client Survey
 * 
 * Instructions:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this script
 * 4. Deploy as a web app with "Anyone" access
 * 5. Copy the web app URL and replace in your HTML file
 */

function doPost(e) {
  try {
    // Get the active spreadsheet or create headers if needed
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Check if headers exist (if not, create them)
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Best Thing',
        'Worst Thing', 
        'Recommendation',
        'Rating',
        'Change One Thing',
        'New Services',
        'Upcoming Projects',
        'First Choice'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Style the header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#EB008B');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
    }
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.bestThing || '',
      data.worstThing || '',
      data.recommendation || '',
      data.rating || '',
      data.changeOneThing || '',
      data.newServices || '',
      data.upcomingProjects || '',
      data.firstChoice || ''
    ];
    
    // Add the new row
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, rowData.length);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Survey response recorded successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    console.error('Error processing survey:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Failed to record survey response'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Optional: Handle GET requests for testing
  return ContentService
    .createTextOutput('Ralph Client Survey Google Apps Script is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Optional: Function to set up the spreadsheet with better formatting
 * Run this manually from the Apps Script editor if you want enhanced formatting
 */
function setupSpreadsheet() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Set up headers if they don't exist
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Timestamp',
      'Best Thing',
      'Worst Thing', 
      'Recommendation',
      'Rating',
      'Change One Thing',
      'New Services',
      'Upcoming Projects',
      'First Choice'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  
  // Style the header row
  const headerRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
  headerRange.setBackground('#EB008B');
  headerRange.setFontColor('white');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  
  // Set column widths for better readability
  sheet.setColumnWidth(1, 120); // Timestamp
  sheet.setColumnWidth(2, 200); // Best Thing
  sheet.setColumnWidth(3, 200); // Worst Thing
  sheet.setColumnWidth(4, 120); // Recommendation
  sheet.setColumnWidth(5, 80);  // Rating
  sheet.setColumnWidth(6, 200); // Change One Thing
  sheet.setColumnWidth(7, 200); // New Services
  sheet.setColumnWidth(8, 200); // Upcoming Projects
  sheet.setColumnWidth(9, 200); // First Choice
  
  // Freeze the header row
  sheet.setFrozenRows(1);
  
  Logger.log('Spreadsheet setup complete!');
}