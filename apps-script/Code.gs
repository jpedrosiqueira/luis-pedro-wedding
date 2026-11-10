/**
 * RSVP receiver for the wedding site.
 * Lives inside a Google Sheet (Extensions > Apps Script). Each RSVP becomes
 * one row in the "RSVPs" tab. Setup steps are in the site's README.
 */
const SHEET_NAME = 'RSVPs';

// Optional: put your email here to get a message for every RSVP. Leave '' for none.
const NOTIFY_EMAIL = '';

const COLUMNS = [
  'timestamp', 'name', 'email', 'phone', 'attending', 'guests', 'guest_names',
  'event_welcome', 'event_wedding', 'event_brunch', 'dietary', 'language',
  'arrival', 'departure', 'airport', 'shuttle', 'message', 'site_language',
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    const p = (e && e.parameter) || {};
    if (p.website) return reply({ ok: true }); // spam trap: real guests never fill this field
    if (!p.name || !p.attending) return reply({ ok: false, error: 'missing fields' });

    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow(COLUMNS.map(function (c) { return c === 'timestamp' ? new Date() : clean(p[c]); }));

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, 'RSVP: ' + p.name + ' (' + p.attending + ')',
        COLUMNS.slice(1).map(function (c) { return c + ': ' + (p[c] || ''); }).join('\n'));
    }
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (ignore) {}
  }
}

// Visiting the web app address in a browser shows this, so you can check it is live.
function doGet() {
  return reply({ ok: true, message: 'RSVP endpoint is running.' });
}

// Keep text as text: stops a value starting with = + - @ from being read as a formula.
function clean(value) {
  const s = String(value == null ? '' : value).slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
