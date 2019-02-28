
var stockData = [  
       { price: 'BDT\n20,000',
    address: 'Tilpapara, Khilgaon, Dhaka',
    bedrooms: ' 2',
    bathrooms: ' 3',
    area: ' 1,100   Sq. Ft.' },
  { price: 'BDT\n25,000',
    address: 'Tilpapara, Khilgaon, Dhaka',
    bedrooms: ' 3',
    bathrooms: ' 3',
    area: ' 1,200   Sq. Ft.' },
  { price: 'BDT\n11,000',
    address: 'South Jatra Bari, Jatra Bari, Dhaka',
    bedrooms: ' 2',
    bathrooms: ' 2',
    area: ' 800   Sq. Ft.' },
    ];
    function convertArrayOfObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    function downloadCSV(args) {
        var data, filename;

        var csv = convertArrayOfObjectsToCSV({
            data: stockData
        });
        if (csv == null) return;

        filename = args.filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);
        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();

    }

    downloadCSV({ filename: "stock-data.csv" });