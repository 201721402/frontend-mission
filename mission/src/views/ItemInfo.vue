<template>
  <div id="item-info-page">
    <div class="image-container">
      <img class="image-placeholder" :src="image" />
    </div>
    <div class="w3-container seller-panel">
      <img class="w3-circle seller-image" :src="seller.profile_image" />
      <div class="seller-info">
        <div>
          <strong>{{ seller.name }}</strong>
        </div>
        <div class="tag-container">
          <div class="w3-left" v-for="tag in seller.hash_tags" :key="tag">
            #{{ tag }}
          </div>
        </div>
      </div>
      <span style="font-size: 30px; padding-top: 10px; padding-bottom: 10px">
        <i class="far fa-star w3-right"></i>
      </span>
    </div>
    <div class="w3-container">
      <h2 data-test="name">{{ name }}</h2>
      <div class="price-container">
        <div
          v-if="isDiscounted()"
          data-test="discount-rate"
          class="w3-left price"
          id="discount"
        >
          {{ display_discount_rate }}
        </div>
        <div class="w3-left price" data-test="price">
          {{ priceStringWithComma(isDiscounted() ? price : original_price) }}
        </div>
        <div v-if="isDiscounted()" class="w3-left" id="original">
          <del>{{ priceStringWithComma(original_price) }}</del>
        </div>
      </div>
    </div>
    <div class="w3-panel">
      <div class="w3-row">
        <h4>상품정보</h4>
      </div>
      <div class="w3-row">
        <html v-html="description"></html>
      </div>
      <div class="w3-row">
        <h4>리뷰</h4>
      </div>
      <div id="reviews">
        <div
          class="review w3-row"
          v-for="review in reviews"
          :key="review.review_no"
        >
          <div class="review-text">
            <div class="review-row-1">
              <div class="review-writer" data-test="review-writer">
                {{ review.writer }}
              </div>
              <div class="review-created" data-test="review-created">
                {{ review.created }}
              </div>
            </div>
            <div class="review-title" data-test="review-title">
              {{ review.title }}
            </div>
            <div class="review-content" data-test="review-content">
              {{ review.content }}
            </div>
          </div>
          <div
            v-if="doesReviewImgExists(review)"
            class="review-img"
            data-test="review-img"
          >
            <img class="w3-right" :src="review.img" />
          </div>
        </div>
      </div>
      <div id="footer">
        <button
          id="btn-pruchase"
          class="w3-round-large"
          data-test="footer-price"
        >
          {{ `${priceStringWithComma(price)} 구매` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ItemModel from '@/model/ItemInfoItem';
import ItemApi from '@/api/Item/ItemApi';

export default {
  name: 'ItemInfoPage',
  data() {
    return {
      item: ItemModel,
    };
  },
  methods: {
    isDiscounted() {
      return this.item.original_price !== -1;
    },
    priceStringWithComma(value) {
      return `${value.toLocaleString()}원`;
    },
    doesReviewImgExists(review) {
      return Object.prototype.hasOwnProperty.call(review, 'img');
    },
  },
  computed: {
    display_discount_rate() {
      if (this.item.original_price === undefined) {
        return '0%';
      }
      const rate = ((this.item.original_price - this.item.price) / this.item.original_price) * 100;
      return `${Number.prototype.toFixed.call(rate, 0)}%`;
    },
  },
  async created() {
    const apiClient = new ItemApi();
    const response = await apiClient.getItemInfo(this.product_no);
    const originalItem = this.item;
    this.item = Object.assign(originalItem, response.data.item);
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  padding-top: 100%;
  background-color: gray;
}

.image-placeholder {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.seller-panel {
  padding-top: 142px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
}

.seller-image {
  height: 50px;
  width: 50px;
  border: 1px solid black;
  margin-right: 10px;
}

.seller-info {
  margin-right: auto;
}

.price-container {
  display: flex;
  align-items: center;
}
.price {
  padding-right: 10px;
  font-size: 22px;
}

#discount {
  color: red;
}

#original {
  color: gray;
}

.tag-container > div {
  margin-right: 10px;
}

.review {
  display: flex;
  border-bottom: 2px solid lightslategray;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.review-row-1 {
  display: flex;
}

.review-text {
  margin-right: auto;
}

.review-img > img {
  height: 100px;
}

.review-writer {
  font-size: large;
  font-weight: bold;
  color: rgb(116, 116, 116);
}

.review-created {
  font-size: small;
  margin-left: 10px;
  color: rgb(116, 116, 116);
}

.review-title {
  font-size: large;
  font-weight: bold;
}

#footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0;
  z-index: 100;
  text-align: center;
  background-color: white;
  border-top: 1px solid lightslategray;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#btn-pruchase {
  background-color: black;
  color: white;
  font-size: x-large;
  padding: 5px 15px;
  box-shadow: 2px 2px 2px gray;
}

#item-info-page {
  padding-bottom: 60px;
}
</style>
