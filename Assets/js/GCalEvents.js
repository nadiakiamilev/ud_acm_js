function GCalEvents(gcal_json_url) {

        // Get list of upcoming iCal events formatted in JSON
        jQuery.getJSON(gcal_json_url, function(data){

            // Parse and render each event
            jQuery.each(data.feed.entry, function(i, item){

                if(i == 0) {
                    jQuery("#gcal-events li").first().hide();
                };
                
                // event title
                var event_title = item.title.$t;
                
                // event contents
                var event_contents = jQuery.trim(item.content.$t);

                // event start date/time
                var event_start_date = new Date(item.gd$when[0].startTime);

                //create MM/DD variable for event start date title
                
                // if event has a start time (as oppose to all day), format date with time
                if(event_start_date.getHours() != 0 || event_start_date.getMinutes() != 0) {
                    var event_start_str = event_start_date.toString("ddd MMM d, h:mm tt");
                } else {
                // otherwise format start as date only (without time)
                    var event_start_str = event_start_date.toString("ddd MMM d");                
                };
                
                // event location
                var event_loc = item.gd$where[0].valueString;
                
                // Render the event
                jQuery("#gcal-events li").last().before(
					"<li class='gcal-event-style'><div class='container'>"
					+ "<label class='header' for='"+i+"'>" + event_title + " <i class='fa fa-caret-down'></i>" + "</label>"
                    // + "<h5 class='header' for='"+i+"'>" + event_title + " <i class='fa fa-caret-down'></i>" + "</h5>"
					+ "<input id='"+i+"' type='checkbox'/>"
					+	"<div class='content'>"
						+ 	"<h5><strong>Time:</strong> " + event_start_str + "</h5>"
						+ 	"<h5><strong>Location:</strong> " + event_loc + "</h5>"
						+	"<h5><strong>Description: </strong></h5>"
						+ 	"<p>" + event_contents.replace(/\n/g,"</p><p>") + "</p>"
					+ "</div></div>"
                    + "</li>"
                );
            });
        });
}