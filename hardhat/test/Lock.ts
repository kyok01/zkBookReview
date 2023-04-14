import { expect } from "chai";
import { ethers } from "hardhat";


describe("BookReview", function () {
  let BookReview;
  let bookReview;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    BookReview = await ethers.getContractFactory("BookReview");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    bookReview = await BookReview.deploy();
    await bookReview.deployed();
  });

  describe("Adding a book", function () {
    it("Should add a book only by the owner", async function () {
      await bookReview.connect(owner).addBook("Book 1");
      const book = await bookReview.books(1);
      expect(book.title).to.equal("Book 1");

      await expect(bookReview.connect(addr1).addBook("Book 2")).to.be.revertedWith("Caller is not the owner.");
    });
  });

  describe("Adding a comment", function () {
    it("Should add a comment to an existing book", async function () {
      await bookReview.connect(owner).addBook("Book 1");

      await bookReview.connect(addr1).addComment(1, "Great book!", addr1.address);
      const comment = await bookReview.comments(1);
      expect(comment.content).to.equal("Great book!");
    });

    it("Should fail when adding a comment to a non-existing book", async function () {
      await expect(bookReview.connect(addr1).addComment(1, "Great book!", addr1.address)).to.be.revertedWith("Invalid Book ID.");
    });
  });

  describe("Checking if a book is reviewed", function () {
    it("Should return true if a book has been reviewed", async function () {
      await bookReview.connect(owner).addBook("Book 1");
      await bookReview.connect(addr1).addComment(1, "Great book!", addr1.address);

      const isReviewed = await bookReview.isBookReviewed(1);
      expect(isReviewed).to.equal(true);
    });

    it("Should return false if a book has not been reviewed", async function () {
      await bookReview.connect(owner).addBook("Book 1");

      const isReviewed = await bookReview.isBookReviewed(1);
      expect(isReviewed).to.equal(false);
    });
  });

  describe("Getting comments by book", function () {
    it("Should return the list of comments for a book", async function () {
      await bookReview.connect(owner).addBook("Book 1");
      await bookReview.connect(addr1).addComment(1, "Great book!", addr1.address);
      await bookReview.connect(addr2).addComment(1, "Interesting read.", addr2.address);

      const commentIds = await bookReview.getCommentsByBook(1);
      expect(commentIds.length).to.equal(2);
    });

    it("Should return an empty list if there are no comments for a book", async function () {
      await bookReview.connect(owner).addBook("Book 1");

      const commentIds = await bookReview.getCommentsByBook(1);
      expect(commentIds.length).to.equal(0);
    });
  });

  describe("Getting comments by IDs", function () {
    it("Should return the list of comments by IDs", async function () {
      await bookReview.connect(owner).addBook("Book 1");
      await bookReview.connect(addr1).addComment(1, "Great book!", addr1.address);
      await bookReview.connect(addr2).addComment(1, "Interesting read.", addr2.address);

      const commentIds = [1, 2];
      const comments = await bookReview.getCommentsByIds(commentIds);

      expect(comments.length).to.equal(2);
      expect(comments[0].content).to.equal("Great book!");
      expect(comments[1].content).to.equal("Interesting read.");
    });

    it("Should return an empty list if there are no valid IDs", async function () {
      const invalidCommentIds = [10000, 20000];
      const comments = await bookReview.getCommentsByIds(invalidCommentIds);

      expect(comments.length).to.equal(0);
    });
  });

});
