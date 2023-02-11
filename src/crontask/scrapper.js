const cron = require("node-cron");

const {
  LinkedinScraper,
  relevanceFilter,
  timeFilter,
  typeFilter,
  experienceLevelFilter,
  onSiteOrRemoteFilter,
  events,
} = require("linkedin-jobs-scraper");
const { createOffCampusJobPostRepo } = require("../repository/quiz.repo");

cron.schedule("*/3 * * * *", async () => {
  let arr = [];
  (async () => {
    // Each scraper instance is associated with one browser.
    // Concurrent queries will run on different pages within the same browser instance.
    const scraper = new LinkedinScraper({
      headless: true,
      slowMo: 700,
      args: ["--lang=en-GB"],
    });

    // Add listeners for scraper events

    // Emitted once for each processed job
    scraper.on(events.scraper.data, (data) => {
      arr.push({
        Location: data.location,
        Id: data.jobId,
        Title: data.title,
        Company: data.company ? data.company : "N/A",
        CompanyLink: data.companyLink ? data.companyLink : "N/A",
        CompanyImgLink: data.companyImgLink ? data.companyImgLink : "N/A",
        Place: data.place,
        Date: data.date,
        Link: data.link,
        applyLink: data.applyLink ? data.applyLink : "N/A",
        insights: data.insights,
      });
    });

    // Emitted once for each scraped page
    scraper.on(events.scraper.metrics, (metrics) => {
      // console.log(`Processed=${metrics.processed}`, `Failed=${metrics.failed}`, `Missed=${metrics.missed}`);
    });

    scraper.on(events.scraper.error, (err) => {
      console.error(err);
    });

    scraper.on(events.scraper.end, async () => {
      console.log("All done!");

  let jobData = new Array();
  arr.forEach(async (data) => {
    console.log(`Data: ${data}`);
    let [err, item] = await createOffCampusJobPostRepo(data);
    if (err) {
      console.log(err.message);
    }
    jobData.push(item);
  });
  await Promise.all(jobData);   });

    // Custom function executed on browser side to extract job description [optional]
    const descriptionFn = () => {
      const description =
        document.querySelector < HTMLElement > ".jobs-description";
      return description
        ? description.innerText.replace(/[\s\n\r]+/g, " ").trim()
        : "N/A";
    };

    // Run queries concurrently
    await Promise.all([
      // Run queries serially
      scraper.run(
        [
          {
            query: "Engineer",
            options: {
              locations: ["India"], // This will override global options ["Europe"]
              filters: {
                type: [typeFilter.FULL_TIME, typeFilter.CONTRACT],
                onSiteOrRemote: [
                  onSiteOrRemoteFilter.REMOTE,
                  onSiteOrRemoteFilter.HYBRID,
                ],
              },
            },
          },
        ],
        {
          // Global options, will be merged individually with each query options
          locations: ["India"],
          limit: 10,
        }
      ),
    ]);

    // Close browser
    await scraper.close();
  })();
 
  console.log("hiuhriuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
});
