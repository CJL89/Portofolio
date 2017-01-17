/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
        it("loops through each feed and ensures url is defined", function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.url).toBeDefined();
                expect(allFeeds.url.length).not.toBe(0);
            });
        });

        // Loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
        it("loops through each feed and ensure names is defined", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    // Test suite named "The menu"
    describe("The menu", function() {

        // Menu element is hidden by default.
        it("menu element is hidden by default", function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        //  Menu changes visibility when the menu icon is clicked. This test has two expectations:
        //     does the menu display when clicked
        //     does it hide when clicked again.
        it("menu display when clicked and hide when clicked again", function() {
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(false);

            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });

    // Test suite named "Initial Entries" */
    describe("Initial Entries", function() {

        // Ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it("has an entry", function() {
            var feedList = document.querySelectorAll(".feed .entry");
            expect(feedList.length).toBeGreaterThan(0);
        });
     });

    // Test suite named "New Feed Selection"
    describe("New Feed Selection", function() {

        var contentLoad;
        var modifiedContent;

        // Ensures when a new feed is loaded by the loadFeed function that the content actually changes.
        beforeEach(function(done) {
            loadFeed(0, function() {
                contentLoad = $(".feed").html();
                loadFeed(1, done);
            });
        });

        it("verifies that the feed is loaded, not empty and the content is not equal to each other", function() {
            modifiedContent = $(".feed").html();
            expect(contentLoad).not.toBe(modifiedContent);
        });
        // expect(contentLoad).not.toBe(modifiedContent);

        // afterAll(function(done) {
        //     loadFeed(0, done);
        // });
    });
}());
