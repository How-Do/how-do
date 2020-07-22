insert into users
(username, email, password, is_admin)
values
('Aislinn Macintosh', 'ace@ace.com', 'ace', true),
('Baili Wilkinson', 'baili@baili.com', 'baili', true),
('Brian DeSplinter', 'brian@brian.com', 'brian', true),
('Josh Hansen', 'josh@josh.com', 'josh', true),
('Meg Sherman', 'meg@meg.com', 'meg', true);

-- POSTS/QUESTIONS
insert into posts
(user_id, category, description, title, post_pic)
values
(1, 'home_improvement', 'I''ve tried a plunger, Drano, and other packaged products, but nothing seems to be working.', 'How do I unclog my kitchen sink?', 'https://s3-production.bobvila.com/articles/wp-content/uploads/2019/07/Plunging_a_Clogged_Kitchen_Sink-650x434.jpg'),
(2, 'home_improvement', 'It''s been over a year, and I can''t figure out how to switch it out.', 'How do I change my home air filter?', 'https://gentryac.com/wp-content/uploads/2018/01/iStock-482689389.jpg'),
(3, 'home_improvement', 'It''s not coming back as green as it was last year.','How do I fertilize my lawn?', 'https://tg-cdn.azureedge.net/sites/default/files/images/home/hero-banner/WK21_765x700_3.jpg'),
(4, 'home_improvement', 'I keep having to re-mop my floors and completely wipe down the inside of the garbage can. It''s so annoying!', 'How do I keep my trash from leaking?', 'https://pbs.twimg.com/media/CQsd2PEWUAA9qg-.jpg'),
(5, 'hobbies', 'I was playing my friend, and he totally switched out his king and castle to escape a check. He insists this is a real thing. What the??? How does that work?', 'How do I castle my king in chess?', 'https://about-going-green.com/wp-content/uploads/2020/05/SU-Design-1588295415-e1588297881742.jpg'),
(1, 'hobbies', 'I remember the double-crochet stitch. I just don''t remember what to take out for the single.', 'How do I do a single-crochet stitch?', 'https://www.sigonimacaroni.com/wp-content/uploads/2017/07/sc11.jpg'),
(2, 'hobbies', 'He has no idea what I''m trying to tell him. Hahaha.', 'How do I teach my dog to sit?','https://www.thelabradorsite.com/wp-content/uploads/2017/09/Cute-Dog-Names-LS-long.jpg'),
(3, 'hobbies', 'Is the C supposed to be at the top or bottom? And how many notes do I skip?', 'How do I play a C chord on the piano?', 'https://static01.nyt.com/images/2018/12/30/sunday-review/30weiner-Sub2/30weiner-Sub2-superJumbo.jpg'),
(4, 'life_hacks', 'I can''t find my tester anywhere. Do I just throw these out?', 'How can I tell if batteries are good when I don''t have a tester?', 'https://i.redd.it/cu9zqlgmkc831.jpg'),
(5, 'life_hacks', 'Some idiot decided to store his used gum on my chair at the movie theater, and now I can''t get it out!', 'How do I get gum out of my jeans?', 'https://resize.hswstatic.com/w_907/gif/gum-on-jeans.jpg'),
(1, 'life_hacks', 'When it was running and flooding outside, my uncle''s shoes stayed completely dry. He said he waterproofed them. How would I do that?', 'How do I waterproof my shoes?', 'https://i.insider.com/5d794e992e22af03b20c6537?width=1200&format=jpeg'),
(2, 'life_hacks', 'They keep getting all bunched up and unfolded when I grab them out of the piles.', 'How do I organize shirts in my drawer?', 'https://lh3.googleusercontent.com/proxy/TOwTxgJ4PlkVgpSJN22QWkckQ1CKcFk2MmQevHhjo61W-O7ciSgoqj7mFkQxjMyulIR7VfjgzIQQ4rPS7xQqNP8unTfZ2vzNWYXMeoyo4Zfo7WkOWTGlOdhXXWrVbauwHIfx9Z95MNAwDI7PgkNOlRQ'),
(3, 'food_and_drink', 'It just keeps rolling around on the cutting board, and I cut my finger open!', 'How do I slice an onion?', 'https://feelgoodfoodie.net/wp-content/uploads/2020/02/how-to-cut-onions-1-500x500.jpg'),
(4, 'food_and_drink', 'I thought a bought grounds, but when I opened up the container it had solid beans. What do I do with these?', 'How do I grind coffee beans?', 'https://cdn11.bigcommerce.com/s-7c282/images/stencil/1280x1280/products/53/286/Coffee_1_lb_bean_gold_bag__19088.1547581289.jpg?c=2&imbypass=on'),
(5, 'food_and_drink', 'I''ve always just sliced off the top of them. But I saw just the stems removed with a tiny hole at a work party last week.', 'How do I remove the stems from strawberries?', 'https://d1alt1wkdk73qo.cloudfront.net/images/guide/f9ef5c90e9c6473584e21261608f58eb/600x540_ac.jpg'),
(1, 'food_and_drink', 'When I put it in the microwave, even for just a few seconds, it melts in some places and stays hard in others. How do I just get it to be room temperature so it''s soft enough to spread?', 'How do I soften butter?', 'https://www.bakepedia.com/wp-content/uploads/2013/10/microwave.jpg'),
(2, 'outdoors', 'All these crazy wires and chains have me totally confused.', 'How do I attach a trailer hitch?', 'https://www.carry-ontrailer.com/wp-content/uploads/2017/08/20170614_COT_ChainWarning-1-1024x749.jpg'),
(3, 'outdoors', 'I have no idea what''s going on, but I really want to impress this guy I''m dating. How do you even get points in football?', 'How do I keep score in American football?', 'https://britishnfltalk.files.wordpress.com/2015/06/ad-confused.jpg'),
(4, 'outdoors', 'My family is headed up to Yellowstone this weekend, but someone told us the bears are super intrusive on campsites this year. What do I do to keep them away?', 'How do I bear-proof my camping site?', 'https://cowboystatedaily.com/wp-content/uploads/2020/05/bear-photo-not-cat-scaled.jpg'),
(5, 'outdoors', 'What do you have to do to prep a fish you caught for cooking?', 'How do I clean a fish?', 'https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/StandardImage/BASS%20warren_carter_128035F0-3C75-11E4-9F2F02D1A622E626.jpg'),
(1, 'outdoors', 'I''ve tried to Google it, but the info is overwhelming!', 'How do I find good hiking trails?', 'https://images-na.ssl-images-amazon.com/images/I/618%2BOfyGD0L._SL1000_.jpg');


-- COMMENTS/RESPONSES
-- Home Improvement
insert into comments
(user_id, post_id, comment, comment_pic)
values
(5, 30, 'Take a regular wire coat hanger and straighten it out as best you can. Then, bend one end over to create a small hook. Push that past the drain cover and start fishing. You should be able to get all sorts of hair and nasty stuff out of the drain. Remember, you always want to be pulling gunk out, not pushing it farther down. When you have as much out as you can, run the hot water, and it should clear things up nicely.', 'https://networx.global.ssl.fastly.net/media/max/800x600/tubdrain003_c8da64dbcd7c4a104cae2e8500d48376.jpg'),
(4, 30, 'Mix 1/3rd cup baking soda with 1/3rd cup vinegar in a measuring cup. It will fizz immediately, and you should waste no time pouring it down the clogged drain. The fizzing action will help to remove the gunk, hair, and grime that has built up in the pipe. Let it sit for one hour or even overnight if you can. Flush with hot water. Alternatively, get as much of the dry baking soda as you can down the drain first, then pour on the vinegar.', 'https://i.ytimg.com/vi/8VOK_mtnHVU/maxresdefault.jpg'),
(1, 31, '1. Turn Off Your Furnace. 2. Find and Locate Your Furnace Filter. 3. Determine the Size of Your Home Air Filter. 4. Remove the Existing (old) Air Filter. 5. Insert the New Air Filter. 6. Return furnace to “on” position.', 'https://fayetteheating.com/wp-content/uploads/2017/03/choose-a-home-air-filter-hero.jpg'),
(2, 32, 'A few days before you feed your lawn, give it a good watering. Check the fertilizer bag to make sure you’re selecting the proper setting for your individual spreader. Apply grass fertilizer around the perimeter. Feeding around the perimeter first will allow you to fertilize the rest of the lawn without worrying about missing any of the edges. Fill in the middle by walking back and forth in straight lines while slightly overlapping with each pass. Return any unused product to the bag and store it for future uses. Be sure to keep it in a cool, dry place away from pets and children.', 'https://www.loveyourlandscape.org/media/20267/lawn-weed-and-feed-sized.jpg'),
(3, 33, 'Put old newspaper at the bottom of your trash bin to absorb food juices.', 'https://littleecofootprints.typepad.com/.a/6a00e55397a5c28834013488422331970c-pi');

-- Hobbies
insert into comments
(user_id, post_id, comment, comment_pic)
values
(4, 34, 'If the king and the rook have not moved from their starting squares, the king is not in check, and all spaces between the king and the rook are empty, move your king two spaces towards the rook you are castling with then place the rook on the opposite side of the king.', 'https://lh3.googleusercontent.com/proxy/yr8pgRBwQF_1jTrJJs1N5oYVm0IvKiyS-fz3WFKrb0obhrG5NqUD7j5GwWUqvq24IpCgCndCJ8ILjX9ZArR0oc8mmvdjbBa0okE'),
(2, 35, 'Hold crochet hook in right hand and make a slip knot on hook. Bring yarn over hook from back to front and grab it with hook. Draw hooked yarn through slip knot and onto hook. Skip the first chain stitch. Insert hook into center of next chain stitch.', 'https://www.anniescatalog.com/stitches/crochet/html5/poster/How-to-single-crochet.jpg'),
(3, 36, 'Hold a treat in your hand so the dog knows you have it. Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose, looking upward and in the process placing his bottom on the ground. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice, then immediately offer him the treat as a reward for sitting. Repeat the trick for 10 minutes, aiming for at least 2-3 short training sessions every day. It will likely take 1-2 weeks of consistent training for your dog to catch on.', 'https://vetstreet-brightspot.s3.amazonaws.com/ff/9282f07f3d11e1b25e005056ad4734/file/Lure%20training97480999.jpg'),
(2, 36, 'Place your dog on a leash and hold the leash taut so that your dog is close to you, but not so tight that it makes him uncomfortable. Help him lower from the standing position to the sitting position by very gently pushing on the area directly above his rear legs. Say "sit" as his bottom touches the floor. Keep your hand in place for about 30 seconds so that he associates the position of sitting with your command. Continue guiding him to the sitting position with your hand for as long as necessary until he learns to sit with only your voice command.', 'https://www.thesprucepets.com/thmb/_sDHMMDGdsIhSOhGRy7Wpc9xRww=/1280x853/filters:fill(auto,1)/dog-sit-109840627-resized-56a26a7a3df78cf772755e1a.jpg'),
(4, 37, 'Put your thumb over the C note (the white key before the two blacks). Play C with your thumb. Skip one white note and play the next white note (E) with your middle finger. Skip another white note and play the next white note (G) with your pinky. Press down all of the notes together.', 'https://www.learntoplaymusic.com/blog/wp-content/uploads/2014/08/C-Major-Chord.jpg');

-- Life Hacks
insert into comments
(user_id, post_id, comment, comment_pic)
values
(5, 38, 'Bounce batteries to see if they are good or bad. Drop them on a table from a 6-inch height. If they give one small bounce and fall right over, they are still good. If they bounce around any more than that, they are dead or on the way out.', 'https://i.ytimg.com/vi/suH32X91sQE/maxresdefault.jpg'),
(1, 39, 'Put some ice cubes in a freezer bag and place the bag on the gum until it hardens. Scrape the gum off with a knife.', 'https://www.wikihow.com/images/thumb/d/d9/Remove-Chewing-Gum-from-Carpets-%28Ice-Cube-Method%29-Step-9.jpg/aid39250-v4-728px-Remove-Chewing-Gum-from-Carpets-%28Ice-Cube-Method%29-Step-9.jpg'),
(2, 40, 'Purchase a waterproofing spray that contains silicone or acrylic polymers. Hold the can 6–8 inches (15–20 cm) away from the shoe and mist on a light, even coating. Wipe off the excess spray with a microfiber cloth or hand towel and let the shoe dry overnight. Repeat if needed.', 'https://i5.walmartimages.com/asr/38d2214b-2a9c-4052-a86a-3a58eed8b3c4_1.0bc0fd37b9811567f70497f224c7517b.jpeg'),
(3, 40, 'Rub Beeswax Lubricating Compound over the shoes. Wave a hairdryer on high heat over the shoes from front to back until the wax fades into the material.', 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_180,pg_1,q_80,w_320/1852ziboq9t10jpg.jpg'),
(3, 41, 'Instead of folding t-shirts haphazardly and then placing one on top of the next, you can fold your t-shirts into a rectangle or square shape and then file them on their side, almost like file folders. With this method, all the shirts are visible at one time rather than stacked to conceal each other. They can also be easily removed without unfolding the other shirts around them.', 'https://s3files.core77.com/blog/images/2014/08/stressbaking-Folded-T-shirts-on-drawer.JPG');

-- Food and Drink
insert into comments
(user_id, post_id, comment, comment_pic)
values
(4, 42, 'Cut the top off the onion then slice it in half. Turn the onion to rest on this flat end and slice in half vertically. If you are only using half of the onion, leave the skin on and wrap the rest in plastic wrap.', 'https://s3-eu-west-1.amazonaws.com/img.leiths.com/how-to/_1180xAUTO_fit_center-center/how-to-veg-sliceonions-lead-2360x1150.jpg?mtime=20150818105236'),
(5, 43, 'Use a coffee grinder in short bursts, each lasting for only a few seconds, to prevent burning the coffee. During the bursts, press the lid tightly to the grinder body and shake it up and down. This will help mix things up and possibly get a more even grind. For a coarse grind, start off with 8-10 seconds. For a medium grind, try 10-15 seconds.', 'https://target.scene7.com/is/image/Target/GUEST_10a25575-9b14-41f6-9909-08077a54479f?wid=488&hei=488&fmt=pjpeg'),
(1, 43, 'Toss beans in a blender (grind about a tablespoon per cup of coffee you’d like to make) and blend them on the pulse setting.', 'https://i.ytimg.com/vi/t4cAr8M6gdY/maxresdefault.jpg'),
(1, 44, 'All you need to remove the stem and core from a strawberry is a plastic drinking straw. Starting at the tip of the fruit, push the straw through the strawberry lengthwise until it pierces through the top, pushing out the stem in process.', 'https://media.musely.com/u/d9bbbdee-7572-4089-a4ad-b4d13b245cb2.jpg'),
(2, 45, 'Get a small glass and warm it up by running warm water over it or putting it in the microwave for a few seconds. Put the glass over the top of the butter. The butter will quickly soften and will be just the right consistency to easily cut and spread.', 'https://www.rightthisminute.com/sites/default/files/styles/twitter_card/public/videos/images/butter-life-hack-video.jpg?itok=qrnGLzMA');

-- Outdoors
insert into comments
(user_id, post_id, comment, comment_pic)
values
(1, 46, 'Use the hand crank to raise the level of the trailer’s hitch until it''s several inches higher than the ball hitch on your back bumper. Back your vehicle towards the trailer,positioning your vehicle’s ball hitch precisely underneath the trailer hitch. Ensure that the trailer hitch is in the unlocked position. The handle will be positioned at a right angle to the neck of the trailer. Use the trailer’s hand crank to lower the trailer’s hitch so it fits securely over your vehicle’s ball hitch. The ball should fit securely inside the rounded space at the end of the trailer’s neck.Once the trailer is attached, use the hand crank to lift the trailer’s wheel. Secure the wheel so that it is parallel to the trailer’s neck. Position the handle so it''s parallel to the trailer’s neck and in the locked position. Place the pin inside the handle. Ensure the trailer will remain attacked to the ball hitch on your vehicle. Cross the trailer''s chains over each other and attach them to the bottom of your vehicle''s trailer hitch, twisting to shorten their length. Insert the hooks from the bottom to ensure they will stay attached. Attach the trailer’s electrical plug to your vehicle’s electrical system. Test the lights, break lights, and turn signals. Never drive with a trailer that lacks a proper electrical system that meets all traffic safety regulations.', 'https://www.varnumlaw.com/assets/htmlimages/Images_Blogs/2010-01-11-trailer_hitch_with_chains.jpg'),
(2, 47, 'Add 6 points for each touchdown, 1 point for each extra point, 2 points for each conversation, 3 points for each field goal, and 2 points for each safety.', 'https://statics.sportskeeda.com/wp-content/uploads/2013/08/capture-1844395.jpg'),
(3, 48, 'Hang your food pack from a tree limb that is at least 10 feet off the ground. Don''t leave food in your tent. Leave your tent flaps open so that a bear can walk in and check for food without resorting to force. Where bears are frequent, secure your food in government-approved “bear-proof” containers.', 'https://chowhound1.cbsistatic.com/thumbnail/800/0/chowhound1.cbsistatic.com/blog-media/2018/08/how-to-store-and-dispose-of-food-while-camping-to-deter-animals-chowhound-670x446.jpg'),
(4, 49, 'Place the knife tip into the fish''s vent and move the blade up along the belly, cutting to the head. Keep the knife placement shallow so you don''t puncture the entrails. Spread open the body, remove the intestines, and scrape the backbone. Cut the head off then rinse the fish in some clean water.', 'https://www.thereadystore.com/wordpress/wp-content/uploads/2016/03/clean-a-fish-7.jpg'),
(5, 50, 'Look up trails in apps and websites such as Maps 3D Pro, ViewRanger, AllTrails, or Mountain Hub.', 'https://visitmontgomery.com/wp-content/uploads/2018/05/Hiking-1.jpg');


update users
set "profile_pic" = 'https://cdn.shopify.com/s/files/1/2830/0642/products/craft-stamp-owl-silhouette-stamp-718949220400.jpg?v=1578746372'
where id = 6;