insert into users
(full_name, email, password, is_admin)
values
('Aislinn Macintosh', 'ace@ace.com', 'ace', true),
('Baili Wilkinson', 'baili@baili.com', 'baili', true),
('Brian DeSplinter', 'brian@brian.com', 'brian', true),
('Josh Hansen', 'josh@josh.com', 'josh', true),
('Meg Sherman', 'meg@meg.com', 'meg', true);

-- Home Improvement
insert into posts
(user_id, category, description, title)
values
(1, 1, 'Take a regular wire coat hanger and straighten it out as best you can. Then, bend one end over to create a small hook. Push that past the drain cover and start fishing. You should be able to get all sorts of hair and nasty stuff out of the drain. Remember, you always want to be pulling gunk out, not pushing it farther down. When you have as much out as you can, run the hot water, and it should clear things up nicely.', 'Unclog Drain with Bent Wire Hanger'),
(2, 1, 'Mix 1/3rd cup baking soda with 1/3rd cup vinegar in a measuring cup. It will fizz immediately, and you should waste no time pouring it down the clogged drain. The fizzing action will help to remove the gunk, hair, and grime that has built up in the pipe. Let it sit for one hour or even overnight if you can. Flush with hot water. Alternatively, get as much of the dry baking soda as you can down the drain first, then pour on the vinegar.', 'Unclog Drain with Baking Sode & Vinegar'),
(3, 1, '1. Turn Off Your Furnace. 2. Find and Locate Your Furnace Filter. 3. Determine the Size of Your Home Air Filter. 4. Remove the Existing (old) Air Filter. 5. Insert the New Air Filter. 6. Return furnace to “on” position.','Change Home Air Filter'),
(4, 1, 'A few days before you feed your lawn, give it a good watering. Check the fertilizer bag to make sure you’re selecting the proper setting for your individual spreader. Apply grass fertilizer around the perimeter. Feeding around the perimeter first will allow you to fertilize the rest of the lawn without worrying about missing any of the edges. Fill in the middle by walking back and forth in straight lines while slightly overlapping with each pass. Return any unused product to the bag and store it for future uses. Be sure to keep it in a cool, dry place away from pets and children.', 'Fertilize Your Lawn'),
(5, 1, 'Put some ice cubes in a freezer bag and place the bag on the gum until it hardens. Scrape the gum off with a knife.','Remove Gum from Clothing');

-- Hobbies
insert into posts
(user_id, category, description, title)
values
(1, 2, 'If the king and the rook have not moved from their starting squares, the king is not in check, and all spaces between the king and the rook are empty, move your king two spaces towards the rook you are castling with then place the rook on the opposite side of the king.','Castle the King in Chess'),
(2, 2, 'Hold crochet hook in right hand and make a slip knot on hook. Bring yarn over hook from back to front and grab it with hook. Draw hooked yarn through slip knot and onto hook. Skip the first chain stitch. Insert hook into center of next chain stitch.','Do a Single Crochet Stitch'),
(3, 2, 'Hold a treat in your hand so the dog knows you have it. Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose, looking upward and in the process placing his bottom on the ground. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice, then immediately offer him the treat as a reward for sitting. Repeat the trick for 10 minutes, aiming for at least 2-3 short training sessions every day. It will likely take 1-2 weeks of consistent training for your dog to catch on.','Teach Your Dog to Sit')
(4, 2, 'Place your dog on a leash and hold the leash taut so that your dog is close to you, but not so tight that it makes him uncomfortable. Help him lower from the standing position to the sitting position by very gently pushing on the area directly above his rear legs. Say "sit" as his bottom touches the floor. Keep your hand in place for about 30 seconds so that he associates the position of sitting with your command. Continue guiding him to the sitting position with your hand for as long as necessary until he learns to sit with only your voice command.','Teach Your Dog to Sit')
(5, 2, 'Put your thumb over the C note (the white key before the two blacks). Play C with your thumb. Skip one white note and play the next white note (E) with your middle finger. Skip another white note and play the next white note (G) with your pinky. Press down all of the notes together.','Play a C Chord on Piano');

-- Life Hacks
insert into posts
(user_id, category, description, title)
values
(1, 3, 'Bounce batteries to see if they are good or bad. Drop them on a table from a 6-inch height. If they give one small bounce and fall right over, they are still good. If they bounce around any more than that, they are dead or on the way out.','Test AA/AAA Batteries'),
(2, 3, 'Put old newspaper at the bottom of your trash bin to absorb food juices.','Leak-proof Trash'),
(3, 3, 'Purchase a waterproofing spray that contains silicone or acrylic polymers. Hold the can 6–8 inches (15–20 cm) away from the shoe and mist on a light, even coating. Wipe off the excess spray with a microfiber cloth or hand towel and let the shoe dry overnight. Repeat if needed.','Waterproof Shoes'),
(4, 3, 'Rub Beeswax Lubricating Compound over the shoes. Wave a hairdryer on high heat over the shoes from front to back until the wax fades into the material.','Waterproof Your Shoes'),
(5, 3, 'Instead of folding t-shirts haphazardly and then placing one on top of the next, you can fold your t-shirts into a rectangle or square shape and then file them on their side, almost like file folders. With this method, all the shirts are visible at one time rather than stacked to conceal each other. They can also be easily removed without unfolding the other shirts around them.','Organize T-shirt Drawer');

-- Food and Drink
insert into posts
(user_id, category, description, title)
values
(1, 4, 'Cut the top off the onion then slice it in half. Turn the onion to rest on this flat end and slice in half vertically. If you are only using half of the onion, leave the skin on and wrap the rest in plastic wrap.', 'Slice an Onion'),
(2, 4, 'Use a coffee grinder in short bursts, each lasting for only a few seconds, to prevent burning the coffee. During the bursts, press the lid tightly to the grinder body and shake it up and down. This will help mix things up and possibly get a more even grind. For a coarse grind, start off with 8-10 seconds. For a medium grind, try 10-15 seconds.', 'Grind Coffee Beans'),
(3, 4, 'Toss beans in a blender (grind about a tablespoon per cup of coffee you’d like to make) and blend them on the pulse setting.', 'Grind Coffee'),
(4, 4, 'All you need to remove the stem and core from a strawberry is a plastic drinking straw. Starting at the tip of the fruit, push the straw through the strawberry lengthwise until it pierces through the top, pushing out the stem in process.','Remove a Strawberry Stem'),
(5, 4, 'Get a small glass and warm it up by running warm water over it or putting it in the microwave for a few seconds. Put the glass over the top of the butter. The butter will quickly soften and will be just the right consistency to easily cut and spread.', 'Soften Butter Without Melting It');

-- Outdoors
insert into posts
(user_id, category, description, title)
values
(1, 5, 'Use the hand crank to raise the level of the trailer’s hitch until it''s several inches higher than the ball hitch on your back bumper. Back your vehicle towards the trailer,positioning your vehicle’s ball hitch precisely underneath the trailer hitch. Ensure that the trailer hitch is in the unlocked position. The handle will be positioned at a right angle to the neck of the trailer. Use the trailer’s hand crank to lower the trailer’s hitch so it fits securely over your vehicle’s ball hitch. The ball should fit securely inside the rounded space at the end of the trailer’s neck.Once the trailer is attached, use the hand crank to lift the trailer’s wheel. Secure the wheel so that it is parallel to the trailer’s neck. Position the handle so it''s parallel to the trailer’s neck and in the locked position. Place the pin inside the handle. Ensure the trailer will remain attacked to the ball hitch on your vehicle. Cross the trailer''s chains over each other and attach them to the bottom of your vehicle''s trailer hitch, twisting to shorten their length. Insert the hooks from the bottom to ensure they will stay attached. Attach the trailer’s electrical plug to your vehicle’s electrical system. Test the lights, break lights, and turn signals. Never drive with a trailer that lacks a proper electrical system that meets all traffic safety regulations.', 'Hitch a Standard Trailer'),
(2, 5, 'Touchdown - 6 points.
Extra point - 1 point.
Two point conversion - 2 points.
Field Goal - 3 points.
Safety - 2 points.', 'Keep Score in Football'),
(3, 5, 'Hang your food pack from a tree limb that is at least 10 feet off the ground. Don''t leave food in your tent. Leave your tent flaps open so that a bear can walk in and check for food without resorting to force. Where bears are frequent, secure your food in government-approved “bear-proof” containers.', 'Bear Proof a Campsite'),
(4, 5, 'Place the knife tip into the fish''s vent and move the blade up along the belly, cutting to the head. Keep the knife placement shallow so you don''t puncture the entrails. Spread open the body, remove the intestines, and scrape the backbone. Cut the head off then rinse the fish in some clean water.', 'Clean a Fish'),
(5, 5, 'Look up trails in apps and websites such as Maps 3D Pro, ViewRanger, AllTrails, or Mountain Hub.', 'Find a Hiking Trail');